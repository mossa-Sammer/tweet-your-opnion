const connection = require('../config/connection');

const getUsers = () => {
	return connection.query('SELECT * FROM users');
};

module.exports = getUsers;
