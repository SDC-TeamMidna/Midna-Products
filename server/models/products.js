const db = require('../db');

module.exports = {
  getAll: (params, callback) => {
    const text = 'SELECT * FROM products LIMIT $1';
    db.query(text, params)
      .then((data) => {
        callback(null, data.rows);
      })
      .catch((err) => callback(err, null));
  },
  getOne: (params, callback) => {
    const product = 'SELECT * FROM products WHERE id = $1';
    const feature = 'SELECT * FROM features WHERE product_id = $1';
    db.query(product, params)
      .then((data) => {
        // products.id = features.product_id
        // console.log('data first ', data.rows[0]);
        db.query(feature, params)
          .then((features) => {
            // eslint-disable-next-line no-param-reassign
            data.rows[0].features = [];
            features.rows.map((item) => data.rows[0].features.push({
              feature: item.feature,
              value: item.value,
            }));
            callback(null, data.rows);
          });
      })
      .catch((err) => callback(err, null));
  },
};

/*
SELECT
reviews.id as review_id,
rating,
summary,
recommend,
body,
to_char(date at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as date,
reviewer_name,
helpfulness,
JSON_AGG(json_build_object('id', reviews_photos.id, 'url', reviews_photos.url))
FROM public.reviews
LEFT JOIN public.reviews_photos
ON reviews.id = reviews_photos.review_id
WHERE product_id=2
GROUP BY reviews.id
ORDER BY date DESC LIMIT 50
*/