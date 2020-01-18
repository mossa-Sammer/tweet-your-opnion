const connection = require('../config/connection');

module.exports = userId => {
	return connection.query('SELECT * FROM posts WHERE user_id=$1', [userId]);
};
