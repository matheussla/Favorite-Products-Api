const envVariables = require('./config/environment');
const server = require('./server');

server.listen(envVariables.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`--- Listening on port ${envVariables.PORT} ---`);
  // eslint-disable-next-line no-console
  console.log(`--- App Name ${envVariables.APP_NAME} ---`);
});
