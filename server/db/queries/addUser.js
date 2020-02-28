const connection = require('../config/connection');

module.exports = ({ firstName, lastName, email, password, imageUrl, age }) => {
  return connection.query(
    'INSERT INTO users (first_name, last_name, email, password, image_url, age) VALUES ($1, $2, $3, $4, $5, $6) returning *',
    [firstName, lastName, email, password, imageUrl, age],
  );
};
