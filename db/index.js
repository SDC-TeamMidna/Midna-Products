const { Pool } = require('pg');

const pool = new Pool({
  user: 'andeezy',
  host: 'localhost',
  database: 'sdc',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 0,
});


module.exports = {
  // getProducts,
  // query: (text, params, callback) => {
  //   return pool.query(text, params, callback)
  // },
  async query(text, params) {
    const start = Date.now();
    try {
      const res = await pool.query(text, params);

      const duration = Date.now() - start;

      console.log('executed query', { text, duration, rows: res.rowCount });
      return res;
    } catch (err) {
      console.log('error in query ', { text });
      throw err;
    }
  },
};

// const getProducts = (count, page, callback) => {
//   const query = {
//     text: 'SELECT * FROM products';
//   }

//   pool.query('SELECT * FROM products LIMIT 10;', (err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data.rows);
//     }
//   });
// };
