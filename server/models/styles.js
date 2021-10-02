const db = require('../db');

module.exports = {
  get: (params, callback) => {
    const styles = {
      product_id: params,
      result: [],
    };
    const text = `SELECT product_id, JSON_AGG(JSON_BUILD_OBJECT(
      'style_id', styles.id, 'name', name, 'sale_price', sale_price,
      'original_price', original_price, 'default?', styles.default, 'photos',
      (SELECT JSON_AGG(JSON_BUILD_OBJECT(
        'thumbnail_url', thumbnail_url, 'url', url
        ))
        FROM photos WHERE photos.style_id = styles.id), 'skus',
      (SELECT JSON_OBJECT_AGG(id,
        JSON_BUILD_OBJECT('quantity', quantity, 'size', size))
        AS skus
        FROM skus
        WHERE skus.style_id = styles.id
        GROUP by style_id)))
        AS results FROM styles
        WHERE styles.product_id = $1
        GROUP BY product_id;`;

    // const photo = 'SELECT * FROM photos WHERE product_id = $1';
    db.query(text, params)
      .then((data) => callback(null, data.rows))
      .catch((err) => callback(err, null));
  },
};
