const { getPostById } = require('../../db/queries');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('get post by id', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('get post by id', () => {
		expect.assertions(2);
		const input = {
			id: 1,
		};
		return getPostById(input).then(data => {
			expect(data.rows[0]).toBeDefined();
			expect(data.rows[0].id).toBe(input.id);
		});
	});
});
