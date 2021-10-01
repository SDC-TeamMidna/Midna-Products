/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const models = require('../models/index');

module.exports = {
  get: (req, res) => {
    const text = 'SELECT * FROM products WHERE COUNT = $2;';
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    models.products.getAll(text, [page, count], (err, data) => {
      if (err) {
        console.log(err);
      }
      res.send(data);
    });
  },
};
