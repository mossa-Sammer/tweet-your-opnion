const connection = require('../config/connection');

const getUserById = id => {
	return connection.query('SELECT * FROM users WHERE id = $1', [id]);
};

module.exports = getUserById;
