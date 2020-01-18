const { verfiyToken } = require('../controllers/utils');
module.exports = (req, res, next) => {
	const { token } = req.cookies;
	verfiyToken(token)
		.then(verfied => {
			console.log(verfied);
			if (verfied) next();
			else
				return res.status(403).json({
					message: 'go home',
				});
		})
		.catch(error => {
			if (error.message === 'invalid signature') {
				const err = new Error(error.message);
				err.statusCode = 403;
				err.data = 'token touched!!!!';
				return next(err);
			} else next(error);
		});
};
