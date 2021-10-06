const db = require('../db');

module.exports = {
  get: (params) => {
    const text = 'SELECT * FROM related WHERE current_product_id = $1';
    return db.query(text, params);
  },
};
