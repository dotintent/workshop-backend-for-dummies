const healthCheckHandler = require('./health-check');
const basicAuthHandler = require('./basic-auth');
const jwtSignInHandler = require('./jwt-sign-in');
const jwtSecuredHandler = require('./jwt-secured');
const notFoundHandler = require('./not-found');
const sqlHandler = require('./sql');

module.exports = {
  healthCheckHandler,
  basicAuthHandler,
  jwtSignInHandler,
  jwtSecuredHandler,
  notFoundHandler,
  sqlHandler,
};
