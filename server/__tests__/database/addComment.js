const { addComment } = require('../../db/queries/');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('testin add commnet query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('add comment query', () => {
		expect.assertions(2);
		const commentData = {
			postId: '1',
			userid: '1',
			content: 'hey, fist comment',
		};

		return addComment(Object.values(commentData)).then(data => {
			expect(data.rows[0]).toBeDefined();
			expect(data.rows[0].post_id).toBe(1);
		});
	});
});
