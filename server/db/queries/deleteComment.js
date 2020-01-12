const connection = require('../config/connection');

const deleteComment = id => {
	return connection.query('DELETE FROM comments WHERE id=$1 returning *', [id]);
};

module.exports = deleteComment;
