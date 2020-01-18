const connection = require('../config/connection');

module.exports = ({ id }) =>
	connection.query('SELECT * FROM comment_likes WHERE comment_id=$1', [id]);
