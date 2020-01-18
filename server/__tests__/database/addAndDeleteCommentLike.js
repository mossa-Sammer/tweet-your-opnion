const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');
const { addLikeToComment } = require('../../db/queries');
const { deleteLikeFromComment } = require('../../db/queries');

describe('add and delete likes in posts queries', () => {
	beforeAll(() => {
		return initDatabase();
	});

	afterAll(() => {
		return connection.end();
	});
	
	const input = {
		userId: 1,
		commentId: 1,
	};
	
	test('add like to comment query', () => {
		expect.assertions(2);
		return addLikeToComment(input).then(data => {
			const { rows } = data;
			expect(rows[0].user_id).toBe(input.userId);
			expect(rows[0].comment_id).toBe(input.commentId);
		});
	});
	test('delete like from comment', () => {
		expect.assertions(2);
		return deleteLikeFromComment(input).then(data => {
			const { rows } = data;
			expect(rows[0].user_id).toBe(input.userId);
			expect(rows[0].comment_id).toBe(input.commentId);
		});
	});
});
