const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');
const { deleteComment } = require('../../db/queries');

describe('delete user comment', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		connection.end();
	});

	test('delete user comment', () => {
		expect.assertions(1);
		const commentId = 1;
		return deleteComment(commentId).then(data => {
			expect(data.rows[0].id).toBe(commentId);
		});
	});
});
