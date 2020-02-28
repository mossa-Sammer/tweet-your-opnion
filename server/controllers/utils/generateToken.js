const jwt = require('jsonwebtoken');

module.exports = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};
