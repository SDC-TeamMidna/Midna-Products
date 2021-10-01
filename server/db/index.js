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
  async query(text, params) {
    // invocation timestamp for query method
    const start = Date.now();
    try {
      const res = await pool.query(text, params);
      // time elapsed since invocation to execution
      const duration = Date.now() - start;

      console.log('executed query', { text, duration, rows: res.rowCount });
      return res;
    } catch (err) {
      console.log('error in query ', { text });
      throw err;
    }
  },
};
