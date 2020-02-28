const supertest = require('supertest');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');
const app = require('../../app');

describe('test the signup route', () => {
  beforeAll(() => {
    return initDatabase();
  });

  afterAll(() => {
    return connection.end();
  });

  test('test the signup route with valid data', done => {
    const userData = {
      firstName: 'mossa',
      lastName: 'dbabesh',
      email: 'mossa1@gmail.com',
      age: 20,
      password: 'mossa123',
      confirmPassword: 'mossa123',
    };
    supertest(app)
      .post('/api/v1/signup')
      .send(userData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('test with invalid data', done => {
    const userData = {
      firstName: 'mos',
      lastName: 'dbabesh',
      email: 'mossa1@gmail.com',
      age: 5,
      password: 'mossa123',
      confirmPassword: 'mossa123',
    };

    supertest(app)
      .post('/api/v1/signup')
      .send(userData)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  test('test with unneccssary data in the body', done => {
    const userData = {
      firstName: 'mos',
      lastName: 'dbabesh',
      email: 'mossa1@gmail.com',
      age: 5,
      password: 'mossa123',
      confirmPassword: 'mossa123',
      fakething: 'dsfsdfsd',
    };

    supertest(app)
      .post('/api/v1/signup')
      .send(userData)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  test('test with duplicated email', done => {
    const userData = {
      firstName: 'mossa',
      lastName: 'dbabesh',
      email: 'mossa@gmail.com',
      age: 20,
      password: 'mossa123',
      confirmPassword: 'mossa123',
    };

    supertest(app)
      .post('/api/v1/signup')
      .send(userData)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
