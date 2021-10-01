const { Pool } = require('pg');

const pool = new Pool({
  user: 'andeezy',
  host: 'localhost',
  database: 'sdc',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 0,
});

// const getProducts = (count, page, callback) => {
//   const query = {
//     text: 'SELECT * FROM products',
//   }

//   pool.query('SELECT * FROM products LIMIT 10;', (err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data.rows);
//     }
//   });
// };

module.exports = {
  // getProducts,
  query: (text, params) => pool.query(text, params),
};
