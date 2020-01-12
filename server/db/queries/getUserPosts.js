const connection = require('../config/connection');

const getUserPosts = userId => {
	return connection.query(
		'SELECT * FROM posts INNER JOIN users ON posts.user_id = users.id',
	);
};

module.exports = getUserPosts;
