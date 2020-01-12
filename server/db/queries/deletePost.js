const connection = require('../config/connection');

const deletePost = id => {
	return connection
		.query('DELETE FROM comments WHERE post_id=$1 returning *', [id])
		.then(() => {
			return connection.query('DELETE FROM posts WHERE id=$1 returning *', [
				id,
			]);
		});
};

module.exports = deletePost;
