const { getPostComments } = require('../../db/queries');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('get post comments by post id', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		connection.end();
	});
	test('get post comments', () => {
		expect.assertions(1);
		const input = { id: 1 };
		return getPostComments(input).then(data => {
			const { rows } = data;
			expect(rows[0].content).toBe('waw this is first fake comment');
		});
	});
});
