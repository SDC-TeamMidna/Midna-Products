const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', router);

// console.log(db);
// app.get('/products', (req, res) => {
//   console.log(req.query);
//   db.getProducts((err, data) => {
//     if (err) {
//       res.status(418).send(err);
//     } else {
//       res.status(200).json(data);
//     }
//   });

//   // res.send('Hallo');
// });

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}!`);
});
