const db = require('../db/index');

app.get('/products', (req, res) => {
  // eslint-disable-next-line consistent-return
  db.query('SELECT * FROM products;', (err, results) => {
    if (err) {
      return err;
    }
    res.send(results.rows);
  });
});
