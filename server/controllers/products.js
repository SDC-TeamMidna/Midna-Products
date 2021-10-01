/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const models = require('../models');

module.exports = {
  get: (req, res) => {
    const text = 'SELECT * FROM products LIMIT $1';
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    models.products.getAll(text, [count], (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send(data);
    });
  },
};
