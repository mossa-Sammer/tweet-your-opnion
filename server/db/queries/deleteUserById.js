const connection = require('../config/connection');
const deletePost = require('../queries/deletePost');

const deleteUser = id => {
	// delete all related data
	return connection
		.query('DELETE FROM comments WHERE user_id = $1', [id])
		.then(() => {
			connection.query('DELETE FROM posts WHERE user_id=$1', [id]);
		})
		.then(() => {
			return connection.query('DELETE FROM users WHERE id=$1 returning *', [
				id,
			]);
		});
};

module.exports = deleteUser;
