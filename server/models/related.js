const db = require('../db');

module.exports = {
  get: (params) => {
    const text = 'SELECT related_product_id FROM related WHERE current_product_id = $1';
    return db.query(text, params);
  },
};
