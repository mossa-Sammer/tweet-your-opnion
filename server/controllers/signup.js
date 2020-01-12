const bcrypt = require('bcrypt');

const { signupSchema } = require('./validation');
const { addUser } = require('../db/queries');

// firstName,
// lastName,
// email,
// password,
// confirmPassword,
// age,
module.exports = (req, res, next) => {
	const { body: userData } = req;

	if (Object.keys(userData).length !== 6)
		return res.status(400).json({
			message: 'bad request',
		});

	signupSchema
		.validate(userData)
		.then(() => {
			return bcrypt.hash(userData.password, 10);
		})
		.then(hashed => {
			userData.password = hashed;
			// destructure to insure the order and insert withou image url
			const { firstName, lastName, email, password, age } = userData;
			return addUser([firstName, lastName, email, password, null, age]);
		})
		.then(data => {
			console.log(data.rows[0]);
			res.json({
				message: 'user created successfully',
				data: data.rows[0],
			});
		})
		.catch(err => {
			if (err.name === 'ValidationError') {
				res.status(400).json({
					message: err.name,
					errors: err.errors,
				});
			} else if (err.code === '23505') {
				res.status(400).json({
					message: err.detail,
				});
			} else {
				next(err);
			}
		});
};
