const connection = require('../config/connection');

module.exports = email => {
  return connection.query('SELECT * FROM users WHERE email = $1', [email]);
};
