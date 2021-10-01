const express = require('express');
const db = require('./db/index');

const app = express();
const PORT = 3000;

const router = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router(app);
// console.log(db);
app.get('/products', (req, res) => {
  console.log(req.query);
  db.query('SELECT * FROM products LIMIT 5;', (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data.rows);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`);
});
