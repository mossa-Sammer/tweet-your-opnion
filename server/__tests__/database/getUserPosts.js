const { getUserPosts } = require('../../db/queries');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('test the add user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('get all user posts', () => {
		expect.assertions(1);
		const userId = 1;
		return getUserPosts(userId).then(data => {
			expect(data.rows[0]).toBeDefined();
		});
	});
});
