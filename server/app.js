const express = require('express');
const db = require('../db/index');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// console.log(db);
app.get('/', (req, res) => {
  console.log(req.query);
  db.getProducts((err, data) => {
    if (err) {
      res.status(418).send(err);
    } else {
      res.status(200).json(data);
    }
  });

  // res.send('Hallo');
});

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`);
});
