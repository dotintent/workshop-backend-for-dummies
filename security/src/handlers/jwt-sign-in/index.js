const jwt = require('jsonwebtoken');

const { VALID_USERNAME, VALID_PASSWORD, JWT_SECRET } = process.env;

module.exports = (request, response) => {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk.toString();
  });

  request.on('end', () => {
    const parsedBody = JSON.parse(body);
    const { username, password } = parsedBody;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      const issuedToken = jwt.sign({
        user: username,
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // token is valid for 1 hour
      }, JWT_SECRET);

      return sendSuccessResponse(response, issuedToken);
    }

    return sendUnauthenticatedResponse(response);
  });
};

// Utility functions

const sendUnauthenticatedResponse = (response) => {
  const responseHeaders = {
    'Content-Type': 'text/plain',
  };

  response.writeHead(401, responseHeaders);
  response.end('Not authorized!');
};

const sendSuccessResponse = (response, token) => {
  const responseHeaders = {
    'Content-Type': 'text/plain',
  };

  response.writeHead(200, responseHeaders);
  response.end(token);
};
