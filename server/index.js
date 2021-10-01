const express = require('express');

const app = express();
const PORT = 3000;

const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', router);

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`);
});
