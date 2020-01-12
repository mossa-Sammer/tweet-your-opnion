const connection = require('../config/connection');

// user id , content
const addComment = commentData => {
	return connection.query(
		'INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) returning *',
		commentData,
	);
};

module.exports = addComment;
