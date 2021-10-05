const path = require('path');
const { Pool } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..config/.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB || 'db',
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 0,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
