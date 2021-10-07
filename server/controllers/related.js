const models = require('../models');

module.exports = {
  get: (req, res) => {
    const id = req.params.product_id;
    models.related.get([id])
      .then((data) => {
        const related = [];
        data.rows.map((item) => related.push(item.related_product_id));
        res.status(200).send(related);
      })
      .catch((err) => res.status(500).send(err));
  },
};
