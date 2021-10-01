const db = require('../db');

module.exports = {
  getAll: (text, params, callback) => {
    db.query(text, params)
      .then((results) => {
        callback(null, results.rows);
      })
      .catch((err) => callback(err, null));
  },
};
