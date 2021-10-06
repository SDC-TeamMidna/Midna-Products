const path = require('path');
const { Pool } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '..config/.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'db',
  database: process.env.DB,
  max: 20,
  password: process.env.DB_PASSWORD,
  idleTimeoutMillis: 0,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
