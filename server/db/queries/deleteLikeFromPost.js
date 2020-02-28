const connection = require('../config/connection');

module.exports = ({ userId, postId }) => {
  return connection.query(
    'DELETE FROM post_likes WHERE user_id =$1 AND post_id=$2 returning *',
    [userId, postId],
  );
};
