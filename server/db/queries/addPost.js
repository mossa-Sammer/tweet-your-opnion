const connection = require('../config/connection');

module.exports = ({ userId, content }) => {
	return connection.query(
		'INSERT INTO posts (user_id, content) VALUES ($1, $2) returning *',
		[userId, content],
	);
};
