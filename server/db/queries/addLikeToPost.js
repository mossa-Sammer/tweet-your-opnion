const connection = require('../config/connection');

module.exports = ({ userId, postId }) => {
	return connection.query(
		'INSERT INTO post_likes (user_id, post_id) VALUES ($1, $2) returning *',
		[userId, postId],
	);
};
