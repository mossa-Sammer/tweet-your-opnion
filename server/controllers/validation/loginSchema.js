const yup = require('yup');

module.exports = yup.object({
	email: yup
		.string('email required')
		.email('should be an email')
		.required('field required'),
	password: yup
		.string('password required')
		.min(8, 'password should be at least 8 characters')
		.required('field required'),
});
