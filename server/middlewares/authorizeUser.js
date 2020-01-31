const { verfiyToken } = require('../controllers/utils');

module.exports = (req, _res, next) => {
	const { token } = req.cookies;
	verfiyToken(token)
		.then(() => next())
		.catch(error => {
			if (error.message === 'invalid signature') {
				next({
					message: error.message,
					statusCode: 403,
					data: 'token touched!!!',
				});
			} else next(error);
		});
};
