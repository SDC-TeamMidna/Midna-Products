require('newrelic');

const path = require('path');
const express = require('express');
require('dotenv').config({ path: path.join(__dirname, '/config/.env') });

const app = express();
const { PORT } = process.env;

const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at localhost:${PORT}!`);
});
