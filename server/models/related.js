const db = require('../db');

module.exports = {
  get: (params, callback) => {
    const text = 'SELECT * FROM related WHERE current_product_id = $1';
    db.query(text, params)
      .then((data) => {
        const related = [];
        data.rows.map((item) => related.push(item.related_product_id));
        callback(null, related);
      })
      .catch((err) => callback(err, null));
  },
};
