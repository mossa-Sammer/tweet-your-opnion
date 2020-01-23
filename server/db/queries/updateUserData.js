const connection = require('../config/connection');

const updateUserData = ({ id, firstName, lastName, email, imageUrl, age }) => {
	return connection.query(
		'UPDATE users SET first_name=$2,last_name=$3,email=$4, image_url=$5, age=$6 WHERE id=$1 returning *',
		[id, firstName, lastName, email, imageUrl, age],
	);
};

module.exports = updateUserData;
