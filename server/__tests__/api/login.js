const supertest = require('supertest');
const app = require('../../app');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('testing the login route', () => {
  beforeAll(() => {
    return initDatabase();
  });
  afterAll(() => {
    return connection.end();
  });
  test('request body with length !=2', done => {
    const input = {
      email: 'mmm@gmail.com',
      password: '12312334',
      key: 'what',
    };
    supertest(app)
      .post('/api/v1/login')
      .send(input)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else done();
      });
  });
  test('request with un registered email', done => {
    const input = {
      email: 'mmm@gmail.com',
      password: '123123123',
    };
    supertest(app)
      .post('/api/v1/login')
      .send(input)
      .expect(404)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        else done();
      });
  });

  test('in valid data', done => {
    const input = {
      email: 'mmmmmsssss',
      password: 123,
    };
    supertest(app)
      .post('/api/v1/login')
      .send(input)
      .expect(400)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        else return done();
      });
  });
  test('inccorrect password', done => {
    const input = {
      email: 'mossa5@gmail.com',
      password: '1231231123',
    };
    supertest(app)
      .post('/api/v1/login')
      .send(input)
      .expect(403)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        else return done();
      });
  });
  test('all is valid ', done => {
    const input = {
      email: 'mossa5@gmail.com',
      password: '123123123',
    };

    supertest(app)
      .post('/api/v1/login')
      .send(input)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        else return done();
      });
  });
});
