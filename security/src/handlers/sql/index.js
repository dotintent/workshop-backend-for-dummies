const {
  DB_HOST,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
} = process.env;

const { Client } = require('pg');
const { scrypt, timingSafeEqual } = require('crypto');
const { promisify } = require('util');

module.exports = async (request, response) => {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) {
    return sendNoCredentialsResponse(response);
  }

  const encodedCredentials = authorizationHeader.split(' ').at(1);
  const [providedUsername, providedPassword] = decodeBase64String(encodedCredentials);

  const dbClient = getDbClient();

  let success = false;

  try {
    const query = `SELECT * FROM users WHERE "username" = '${providedUsername}';`;
    const parameters = [];

    const queryResult = await dbClient.query(query, parameters);

    const foundRecord = queryResult.rows?.at(0);

    console.log(foundRecord);

    success = foundRecord && (await comparePassword(foundRecord.password, providedPassword));
  } catch (error) {
    console.error(error);
  } finally {
    await dbClient.end();
  }

  return success
    ? sendSuccessResponse(response, providedUsername)
    : sendWrongCredentialsResponse(response, providedUsername);
};

// Utility functions

const sendNoCredentialsResponse = (response) => {
  const responseHeaders = {
    'WWW-Authenticate': 'Basic', // this response header enforces displaying prompt for credentials
  };

  response.writeHead(401, responseHeaders);
  response.end();
};

const sendWrongCredentialsResponse = (response, username) => {
  const responseHeaders = {
    'Content-Type': 'text/html',
  };

  response.writeHead(401, responseHeaders);
  response.end(`Not authenticated! Provided username: ${username}`);
};

const sendSuccessResponse = (response, username) => {
  const responseHeaders = {
    'Content-Type': 'text/html',
  };

  response.writeHead(200, responseHeaders);
  response.end(`Hello, authorized user: ${username}!`);
};

const decodeBase64String = (base64String) => Buffer.from(base64String, 'base64').toString().split(':');

const getDbClient = () => {
  const client = new Client({
    user: DB_USERNAME,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
  });

  client.connect();

  return client;
};

const scryptAsync = promisify(scrypt);

const comparePassword = async (storedPassword, providedPassword) => {
  const [hashedPassword, salt] = storedPassword.split('.');
  const hashedPasswordBuffer = Buffer.from(hashedPassword, 'hex');
  const providedPasswordBuffer = await scryptAsync(providedPassword, salt, 64);

  return timingSafeEqual(hashedPasswordBuffer, providedPasswordBuffer);
};
