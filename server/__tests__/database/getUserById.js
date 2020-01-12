const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

const getUserById = require('../../db/queries/getUserById');

describe('test the add user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('get user by id query', () => {
		expect.assertions(1);
		return getUserById(1).then(data => {
			expect(data.rows.length).toBe(1);
		});
	});
});
