const connection = require('../config/connection');
const deletePost = require('../queries/deletePost');

module.exports = id => {
	const independentQuiers = [
		connection.query(
			'DELETE FROM comment_likes WHERE comment_likes.comment_id IN (SELECT id FROM comments WHERE user_id=$1)',
			[id],
		),
		connection.query(
			'DELETE FROM comment_likes WHERE comment_likes.user_id =$1',
			[id],
		),
		connection.query('DELETE FROM post_likes WHERE user_id=$1', [id]), // all user posts likes
		connection.query(
			'DELETE FROM post_likes WHERE post_id IN (SELECT id FROM posts WHERE user_id=$1)',
			[id],
		),
	];
	return Promise.all(independentQuiers)
		.then(() =>
			connection.query('DELETE FROM comments WHERE user_id = $1', [id]),
		)
		.then(() => connection.query('DELETE FROM posts WHERE user_id=$1', [id]))
		.then(() =>
			connection.query('DELETE FROM users WHERE id=$1 returning *', [id]),
		);
};
