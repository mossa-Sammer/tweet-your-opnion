const bcrypt = require('bcrypt');

const { signupSchema } = require('./validation');
const { addUser } = require('../db/queries');
const { generateToken } = require('./utils');

// firstName,
// lastName,
// email,
// password,
// confirmPassword,
// age,
module.exports = (req, res, next) => {
  const { body: userData } = req;

  if (Object.keys(userData).length !== 6) {
    next({ message: 'bad request', statusCode: 400 });
  }

  signupSchema
    .validate(userData)
    .then(() => bcrypt.hash(userData.password, 10))
    .then(hashed => {
      userData.password = hashed;
      return Promise.all([addUser(userData), generateToken(userData.email)]);
    })
    .then(([data, token]) => {
      const { rows } = data;
      res.cookie('token', token);
      res.cookie('id', rows[0].id);
      res.json({
        message: 'user created successfully',
        data: data.rows[0],
      });
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        next({ message: error.name, statusCode: 400, data: error.errors });
      } else if (error.code === '23505') {
        next({
          message: 'duplicate key',
          statusCode: 400,
          data: error.constraint,
        });
      } else {
        next(error);
      }
    });
};
