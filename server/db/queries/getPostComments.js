const connection = require('../config/connection');

module.exports = ({ id }) => {
	return connection.query('SELECT * FROM comments WHERE post_id=$1', [id]);
};
