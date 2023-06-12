const { VALID_USERNAME, VALID_PASSWORD } = process.env;

module.exports = (request, response) => {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) {
    return sendNoCredentialsResponse(response);
  }

  const encodedCredentials = authorizationHeader.split(' ').at(1);
  const [providedUsername, providedPassword] = decodeBase64String(encodedCredentials);

  if (providedUsername !== VALID_USERNAME || providedPassword !== VALID_PASSWORD) {
    return sendWrongCredentialsResponse(response, providedUsername);
  }

  return sendSuccessResponse(response, providedUsername);
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
  response.end(`Not authenticated! Provided username: <i>${username}</i>.`);
};

const sendSuccessResponse = (response, username) => {
  const responseHeaders = {
    'Content-Type': 'text/html',
  };

  response.writeHead(200, responseHeaders);
  response.end(`Hello, <i>${username}</i>!`);
};

const decodeBase64String = (base64String) => Buffer.from(base64String, 'base64').toString().split(':');
