const jwt = require('jsonwebtoken');

module.exports = token => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
			if (err) reject(err);
			else resolve(result);
		});
	});
};
