const connection = require('../config/connection');

const getPostById = id => {
	return connection.query('SELECT * FROM users WHERE id=$1', [id]);
};

module.exports = getPostById;
