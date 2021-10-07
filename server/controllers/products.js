/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const models = require('../models');

module.exports = {
  getAll: (req, res) => {
    const count = req.query.count || 5;
    models.products.getAll([count])
      .then((data) => res.status(200).send(data.rows))
      .catch((err) => res.status(500).send(err));
  },

  getOne: (req, res) => {
    const id = req.params.product_id;
    models.products.getOne([id])
      .then((data) => {
        console.log(data.rows);
        res.status(200).send(data.rows);
      })
      .catch((err) => res.status(500).send(err));
  },
};
