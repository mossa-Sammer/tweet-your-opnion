const yup = require('yup');

module.exports = yup.object({
	firstName: yup
		.string('must be string')
		.min(3, 'length must be more than 3')
		.max(10, 'length must be less than 10')
		.required('required field'),
	lastName: yup
		.string('must be string')
		.min(3, 'length must be more than 3')
		.max(10, 'length must be less than 10')
		.required('required field'),
	email: yup
		.string('must be string')
		.email('must be an email')
		.required('required field'),
	password: yup
		.string('must be string')
		.min(8, 'must be more than 8')
		.required('required field'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	age: yup
		.number()
		.min(6, 'age must be more than 6')
		.max('140', 'age must be less than 150 old man')
		.required(),
});

// image validation => next step
