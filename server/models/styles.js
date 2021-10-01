const db = require('../db');

module.exports = {
  get: (params, callback) => {
    const styles = {
      product_id: params,
      result: [],
    };
    const style = 'SELECT * FROM styles WHERE product_id = $1;';
    // const photo = 'SELECT * FROM photos WHERE product_id = $1';
    db.query(style, params)
      .then((data) => {
        const { id } = data.rows[0];
        db.query('SELECT * FROM photos WHERE style_id = $1;', [id])
          .then((photos) => {
            console.log(photos.rows);
          });
      });
  },
};
