const http = require('http');
const url = require('url');

const {
  healthCheckHandler,
  basicAuthHandler,
  jwtSignInHandler,
  jwtSecuredHandler,
  notFoundHandler,
  sqlHandler,
} = require('./handlers');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET') {
    switch (parsedUrl.pathname) {
      case '/':
        return healthCheckHandler(req, res);
      case '/basic-auth':
        return basicAuthHandler(req, res);
      case '/jwt/secured':
        return jwtSecuredHandler(req, res);
      case '/sql':
        return sqlHandler(req, res);
    }
  }

  if (req.method === 'POST') {
    switch (parsedUrl.pathname) {
      case '/jwt/sign-in':
        return jwtSignInHandler(req, res);
    }
  }

  return notFoundHandler(req, res);
});

server.listen(3010, () => {
  console.log('Server listening on port 3010');
});
