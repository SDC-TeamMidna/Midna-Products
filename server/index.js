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

app.get('/loaderio-b6a2d64e9bcd1111ffd2d6e520a5ce13', (req, res) => {
  res.send('loaderio-b6a2d64e9bcd1111ffd2d6e520a5ce13');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at localhost:${PORT}!`);
});
