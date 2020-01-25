const { verfiyToken } = require('../controllers/utils');
module.exports = (req, res, next) => {
	const { token } = req.cookies;
	verfiyToken(token)
		.then(verfied => {
			if (verfied) next();
			else
				return res.status(403).json({
					message: 'go home',
				});
		})
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
