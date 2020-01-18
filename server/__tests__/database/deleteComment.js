const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');
const { deleteComment } = require('../../db/queries');

describe('delete user comment', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('delete user comment', () => {
		expect.assertions(1);
		const input = {
			id: 1,
		};
		return deleteComment(input).then(data => {
			expect(data.rows[0].id).toBe(input.id);
		});
	});
});
