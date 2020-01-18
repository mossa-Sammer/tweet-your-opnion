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
		const err = new Error('bad request');
		err.statusCode = 400;
		return next(err);
	}

	signupSchema
		.validate(userData)
		.then(() => bcrypt.hash(userData.password, 10))
		.then(hashed => {
			userData.password = hashed;
			// destructure to insure the order and insert without image url
			const { firstName, lastName, email, password, age } = userData;
			return Promise.all([
				addUser([firstName, lastName, email, password, null, age]),
				generateToken(userData.email),
			]);
		})
		.then(([data, token]) => {
			res.cookie('token', token);
			res.json({
				message: 'user created successfully',
				data: data.rows[0],
			});
		})
		.catch(error => {
			if (error.name === 'ValidationError') {
				const err = new Error(error.name);
				err.statusCode = 400;
				err.data = err.errors;
				return next(err);
			} else if (error.code === '23505') {
				// console.log(error);
				for ([key, value] of Object.entries(error)) {
					console.log(key, value);
				}
				const err = new Error('duplicate key');
				err.statusCode = 400;
				err.data = error.constraint;
				console.log(err);
				return next(err);
			} else {
				return next(err);
			}
		});
};
