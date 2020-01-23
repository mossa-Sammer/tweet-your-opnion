const { signup } = require('../../controllers');
const supertest = require('supertest');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');
const app = require('../../app');

describe('GET getuserposts', () => {
	let cookies = {};
	const input = {
		firstName: 'jhon',
		lastName: 'doe',
		email: 'skidrow@gmail.com',
		password: '123123123',
		confirmPassword: '123123123',
		age: 30,
	};
	beforeAll(() => {
		return initDatabase()
			.then(() => {
				return supertest(app)
					.post('/api/v1/signup')
					.send(input);
			})
			.then(res => {
				cookies.token = res.header['set-cookie'][0].split('=')[1].split(';')[0];
				cookies.id = res.header['set-cookie'][1].split('=')[1].split(';')[0];
			});
	});

	afterAll(() => {
		return connection.end();
	});

	test('get user posts with invalid token', done => {
		supertest(app)
			.get('/api/v1/getuserposts')
			.set('Cookie', [`token=${cookies.token}`, `id=${cookies.id}`])
			.expect(200)
			.expect('Content-Type', /json/)
			.end((err, res) => {
				if (err) return done(err);
				else return done();
			});
	});
});
