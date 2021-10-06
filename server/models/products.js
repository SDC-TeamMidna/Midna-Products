const db = require('../db');

module.exports = {
  getAll: (params) => {
    const text = `
      SELECT id, name, slogan, description, category, default_price
      FROM products LIMIT $1;
      `;
    return db.query(text, params);
  },
  getOne: (params) => {
    const text = `
    SELECT id, name, slogan, description, category, default_price,
      (SELECT JSON_AGG(JSON_BUILD_OBJECT(
        'feature', features.feature, 'value', features.value))
      AS features
      FROM features
      WHERE products.id = features.product_id)
    FROM products
    WHERE id = $1;`;
    return db.query(text, params);
  },
};
