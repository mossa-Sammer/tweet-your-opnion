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
const getPostComments = require('./getPostComments');
const addLikeToPost = require('./addLikeToPost');
const deleteLikeFromPost = require('./deleteLikeFromPost');
const addLikeToComment = require('./addLikeToComment');
const deleteLikeFromComment = require('./deleteLikeFromComment');
const getCommentLikes = require('./getCommentLikes');
const getUserByEmail = require('./getUserByEmail');
const getUserById = require('./getUserById');

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
  getPostComments,
  addLikeToPost,
  deleteLikeFromPost,
  addLikeToComment,
  deleteLikeFromComment,
  getCommentLikes,
  getUserByEmail,
};
