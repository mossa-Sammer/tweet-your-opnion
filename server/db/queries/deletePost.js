const connection = require('../config/connection');

module.exports = ({ id }) => {
  return Promise.all([
    connection.query('DELETE FROM post_likes WHERE post_id=$1', [id]),
    connection.query('DELETE FROM comment_likes WHERE post_id=$1', [id]),
  ])
    .then(() => connection.query('DELETE FROM comments WHERE post_id=$1', [id]))
    .then(() =>
      connection.query('DELETE FROM posts WHERE id=$1 returning *', [id]),
    );
};
