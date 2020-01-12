const connection = require('../config/connection');

const getUserByEmail = email => {
	return connection.query('SELECT * FROM users WHERE email = $1', [email]);
};

module.exports = getUserByEmail;
