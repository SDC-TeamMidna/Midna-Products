/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    const count = req.query.count || 5;
    models.products.getAll([count], (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(data);
    });
  },

  getOne: (req, res) => {
    const id = req.params.product_id;
    models.products.getOne([id], (err, data) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data);
    });
  },
};
