const connection = require('../config/connection');

module.exports = ({ id }) => {
	return connection
		.query('DELETE FROM comment_likes WHERE comment_id=$1', [id])
		.then(() =>
			connection.query('DELETE FROM comments WHERE id=$1 returning *', [id]),
		);
};
