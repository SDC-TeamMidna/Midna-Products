const db = require('../db');

module.exports = {
  getAll: (text, params, callback) => db.query(text, params)
    .then((data) => callback(null, data))
    .catch((err) => err.stack),
};
