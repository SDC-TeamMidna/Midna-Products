/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    // const query = 'SELECT * FROM products LIMIT $1';
    // const page = req.query.page || 1;
    const count = req.query.count || 5;
    models.products.getAll([count], (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  },

  getOne: (req, res) => {
    console.log(req.params);
    const id = req.params.product_id;
    // const query = 'SELECT * FROM products WHERE id = $1';
    models.products.getOne([id], (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  },
};
