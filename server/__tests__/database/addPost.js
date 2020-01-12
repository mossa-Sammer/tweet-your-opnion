const { addPost } = require('../../db/queries/');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('test add post query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('test add post query', () => {
		expect.assertions(2);
		const content = {
			userId: 1,
			text: 'waw, first post and hello world',
		};

		return addPost(Object.values(content)).then(data => {
			expect(data.rows[0]).toBeDefined();
			expect(data.rows[0].content).toBe(content.text);
		});
	});
});
