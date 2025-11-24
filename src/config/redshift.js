// src/config/redshift.js

const { Pool } = require('pg');

// Load environment variables
require('dotenv').config();

const pool = new Pool({
  host: process.env.REDSHIFT_HOST,        // e.g. redshift-cluster.xxxxx.us-east-1.redshift.amazonaws.com
  port: process.env.REDSHIFT_PORT || 5439,
  user: process.env.REDSHIFT_USER,
  password: process.env.REDSHIFT_PASSWORD,
  database: process.env.REDSHIFT_DB,
  ssl: {
    rejectUnauthorized: true,             // Enforce SSL for security
  },
  max: 10,                                // Connection pool size
  idleTimeoutMillis: 30000,               // Close idle clients after 30s
  connectionTimeoutMillis: 2000           // Timeout if cannot connect
});

// Test connection
(async () => {
  try {
    const res = await pool.query('SELECT current_date;');
    console.log('✅ Redshift connected successfully:', res.rows[0]);
  } catch (err) {
    console.error('❌ Redshift connection error:', err);
  }
})();

module.exports = pool;
