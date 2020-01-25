const jwt = require('jsonwebtoken');
const { generateToken } = require('./utils');
const { compare } = require('bcrypt');

const { loginSchema } = require('./validation');
const { getUserByEmail } = require('../db/queries');

module.exports = (req, res, next) => {
	const { body: userData } = req;

	if (Object.keys(userData).length !== 2) {
		next({ message: 'bad request', statusCode: 400 });
	}

	loginSchema
		.validate(userData)
		.then(() => getUserByEmail(userData.email))
		.then(data => {
			const { rows } = data;
			if (!rows[0]) {
				throw { message: 'email not found', statusCode: 404 };
			}
			return compare(userData.password, rows[0].password);
		})
		.then(authed => {
			if (authed === false) {
				throw { message: 'incorrect password', statusCode: 403 };
			}
			return generateToken(userData.email);
		})
		.then(token => {
			res.cookie('token', token);
			res.status(200).json({
				message: 'loged in successfully',
			});
		})
		.catch(error => {
			if (error.name === 'ValidationError') {
				next({
					message: error.name,
					statusCode: 400,
					data: error.errors,
				});
			} else next(error);
		});
};
