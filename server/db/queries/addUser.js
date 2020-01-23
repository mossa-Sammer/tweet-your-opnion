const connection = require('../config/connection');

module.exports = data => {
	return connection.query(
		'INSERT INTO users (first_name, last_name, email, password, image_url, age) VALUES ($1, $2, $3, $4, $5, $6) returning *',
		data,
	);
};
