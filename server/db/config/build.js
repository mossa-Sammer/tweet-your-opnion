const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const initDatabase = () => {
	const build = readFileSync(join(__dirname, 'build.sql')).toString();
	const fakeData = readFileSync(join(__dirname, 'fakedata.sql')).toString();
	return connection.query(build + fakeData);
};

module.exports = initDatabase;
