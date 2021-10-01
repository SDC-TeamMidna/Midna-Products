const models = require('../models');

module.exports = {
  get: (req, res) => {
    const id = req.params.product_id;
    models.styles.get([id], (err, data) => {
      if (err) {
        res.status(404).send(err);
      }
      res.status(200).send(data);
    });
  },
};
