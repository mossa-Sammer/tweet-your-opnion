const connection = require('../config/connection');

module.exports = () => {
  return connection.query('SELECT * FROM users');
};
