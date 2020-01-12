const { deletePost } = require('../../db/queries/');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('delete user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('delete post by id', () => {
		expect.assertions(1);
		const postId = 1;
		return deletePost(postId).then(data => {
			expect(data.rows[0].id).toBe(postId);
		});
	});
});
