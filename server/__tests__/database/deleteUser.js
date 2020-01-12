const { deleteUserById } = require('../../db/queries');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('delete user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('delete user by id', () => {
		expect.assertions(1);
		const userId = 1;
		return deleteUserById(userId).then(data => {
			expect(data.rows[0].id).toBe(userId);
		});
	});
});
