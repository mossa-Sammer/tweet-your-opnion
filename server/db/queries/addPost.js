const connection = require('../config/connection');

const addPost = content => {
	return connection.query(
		'INSERT INTO posts (user_id, content) VALUES ($1, $2) returning *',
		content,
	);
};

module.exports = addPost;
