const connection = require('../config/connection');

module.exports = ({ userId, commentId }) => {
	return connection.query(
		'INSERT INTO comment_likes (user_id, comment_id) VALUES ($1, $2) RETURNING *',
		[userId, commentId],
	);
};
