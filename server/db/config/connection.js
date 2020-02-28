const { Pool } = require('pg');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
let dbURL = '';

switch (process.env.NODE_ENV) {
  case 'production':
    dbURL = process.env.DATABASE_URL;
    break;
  case 'test':
    dbURL = process.env.DB_TEST_URL;
  case 'development':
    dbURL = process.env.DB_URL;
    break;
  default:
    dbURL = process.env.DB_URL;
  // throw new Error('database url not found!');
}

const options = {
  connectionString: dbURL,
  ssl: true,
};

module.exports = new Pool(options);
