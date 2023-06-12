const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (request, response) => {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) {
    return sendUnauthenticatedResponse(response);
  }

  try {
    const { user: username } = jwt.verify(authorizationHeader, JWT_SECRET, {
      ignoreExpiration: false,
    });

    return sendSuccessResponse(response, username);
  } catch (error) {
    return sendUnauthenticatedResponse(response);
  }
};

// Utility functions

const sendUnauthenticatedResponse = (response) => {
  const responseHeaders = {
    'Content-Type': 'text/plain',
  };

  response.writeHead(401, responseHeaders);
  response.end('Not authenticated!');
};

const sendSuccessResponse = (response, username) => {
  const responseHeaders = {
    'Content-Type': 'text/html',
  };

  response.writeHead(200, responseHeaders);
  response.end(`Hello, <i>${username}</i>!`);
};
