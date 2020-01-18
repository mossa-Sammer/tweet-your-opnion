const jwt = require('jsonwebtoken');
const { generateToken } = require('./utils');
const { compare } = require('bcrypt');

const { loginSchema } = require('./validation');
const { getUserByEmail } = require('../db/queries');

module.exports = (req, res, next) => {
	const { body: userData } = req;

	if (Object.keys(userData).length !== 2) {
		const err = new Error('bad request');
		err.statusCode = 400;
		next(err);
	}
	// return res.status(400).json({ message: 'bad request' });

	loginSchema
		.validate(userData)
		.then(() => getUserByEmail(userData.email))
		.then(data => {
			const { rows } = data;
			if (!rows[0]) {
				const err = new Error('email not found');
				err.statusCode = 404;
				throw err;
			}
			return compare(userData.password, rows[0].password);
		})
		.then(authed => {
			console.log(authed);
			if (!authed) {
				const err = new Error('incorrect password');
				err.statusCode = 403;
				throw err;
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
			let err;
			if (error.name === 'ValidationError') {
				err = new Error(error.name);
				err.statusCode = 400;
				err.data = error.errors;
				next(err);
			}
			next(error);
		});
};
