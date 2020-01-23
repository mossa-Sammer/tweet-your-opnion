const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

const { updateUserData } = require('../../db/queries');

describe('test the add user query', () => {
	beforeAll(() => {
		return initDatabase();
	});
	afterAll(() => {
		return connection.end();
	});

	test('update user data without password', () => {
		expect.assertions(2);
		const userData = {
			id: 1,
			firstName: 'mossa',
			lastName: 'dbabesh',
			email: 'updatedEmail@gmail.com',
			imageUrl: null,
			age: 30,
		};
		return updateUserData(userData).then(data => {
			expect(data.rows[0].id).toBe(userData.id);
			expect(data.rows[0].email).toBe(userData.email);
		});
	});
});
