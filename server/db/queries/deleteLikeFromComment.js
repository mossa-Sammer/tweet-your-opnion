const connection = require('../config/connection');

module.exports = ({ userId, commentId }) => {
	return connection.query(
		'DELETE FROM comment_likes WHERE user_id=$1 AND comment_id=$2 RETURNING *',
		[userId, commentId],
	);
};
