const signup = require('./signup');
const login = require('./login');
const getUserPosts = require('./getUserPosts');
const errorHandler = require('./errors');

module.exports = {
	signup,
	login,
	getUserPosts,
	errorHandler,
};
