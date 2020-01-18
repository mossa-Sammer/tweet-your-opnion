const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');
const { getCommentLikes } = require('../../db/queries/');

describe('get comment likes', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});
	test('get comment likes', () => {
		expect.assertions();
		const input = {
			id: 1,
		};
		return getCommentLikes(input).then(data => {
			const { rows } = data;
			expect(rows[0].post_id).toBe(input.id);
		});
	});
});
