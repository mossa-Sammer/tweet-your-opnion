const connection = require('../config/connection');

const addUser = data => {
	return connection.query(
		'INSERT INTO users (first_name, last_name, email, password, image_url, age) VALUES ($1, $2, $3, $4, $5, $6) returning first_name, last_name, email, image_url, age',
		data,
	);
};

module.exports = addUser;
