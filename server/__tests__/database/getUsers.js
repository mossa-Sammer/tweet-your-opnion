const { getUsers } = require('../../db/queries');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('test the add user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('testing the get All Users function', () => {
		expect.assertions(2);
		return getUsers().then(data => {
			expect(data.rows).toBeDefined();
			expect(data.rows[0]).toBeDefined();
		});
	});
});
