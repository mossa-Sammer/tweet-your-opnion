const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');
const { addLikeToPost } = require('../../db/queries');
const { deleteLikeFromPost } = require('../../db/queries');

describe('add and delete likes in posts queries', () => {
	beforeAll(() => {
		return initDatabase();
	});

	afterAll(() => {
		return connection.end();
	});

	const input = {
		userId: 1,
		postId: 1,
	};

	test('add like to post', () => {
		expect.assertions(2);

		return addLikeToPost(input).then(data => {
			const { rows } = data;
			expect(rows[0].user_id).toBe(input.userId);
			expect(rows[0].post_id).toBe(input.postId);
		});
	});

	test('delete like from post ', () => {
		expect.assertions(2);
		return deleteLikeFromPost(input).then(data => {
			const { rows } = data;
			expect(rows[0].user_id).toBe(input.userId);
			expect(rows[0].post_id).toBe(input.postId);
		});
	});
});
