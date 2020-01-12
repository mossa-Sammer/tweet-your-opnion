const getUsers = require('./getUsers');
const addUser = require('./addUser');
const updateUserData = require('./updateUserData');
const deleteUserById = require('./deleteUserById');
const addPost = require('./addPost');
const addComment = require('./addComment');
const getPostById = require('./getPostById');
const getUserPosts = require('./getUserPosts');
const deletePost = require('./deletePost');
const deleteComment = require('./deleteComment');

module.exports = {
	getUsers,
	addUser,
	updateUserData,
	deleteUserById,
	addPost,
	addComment,
	getPostById,
	getUserPosts,
	deletePost,
	deleteComment,
};
