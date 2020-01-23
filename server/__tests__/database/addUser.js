const { addUser } = require('../../db/queries/');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('test the add user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('add user query', () => {
		expect.assertions(2);
		const user = {
			firstName: 'skidrow',
			lastName: 'skid',
			email: 'skidskidskid1@gmail.com',
			password: '123123',
			image_url: null,
			age: 30,
		};
		return addUser(user).then(data => {
			expect(data.rows[0]).toBeDefined();
			expect(data.rows[0].email).toBe(user.email);
		});
	});
});
