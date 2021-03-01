const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');

const swaggerConfig = require('./config/swagger');

const routes = require('./routes');

const app = express();

swaggerConfig(app);

app.use(cors());

app.use(bodyParse.json());

app.use('/', routes);

app.use((err, res) => res
  .status(err.status || 500)
  .json(err.data || { message: 'Internal server error' }));

module.exports = app;
