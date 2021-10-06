const models = require('../models');

module.exports = {
  get: (req, res) => {
    const id = req.params.product_id;
    models.styles.get([id])
      .then((data) => res.status(200).send(data.rows))
      .catch((err) => res.status(404).send(err));
  },
};
