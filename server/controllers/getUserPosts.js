const { getUserPosts } = require('../db/queries');

module.exports = (req, res, next) => {
  const { id } = req.cookies;
  getUserPosts(id)
    .then(result => {
      const { rows } = result;
      return res.status(200).json({
        data: rows,
      });
    })
    .catch(next);
};
