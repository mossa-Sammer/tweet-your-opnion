const getUserByEmail = require('../../db/queries/getUserByEmail');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('test the add user query', () => {
  beforeAll(() => {
    return initDatabase();
  });
  afterAll(() => {
    return connection.end();
  });

  test('get a user by email', () => {
    expect.assertions(2);
    const userEmail = 'mossa@gmail.com';
    return getUserByEmail(userEmail).then(data => {
      expect(data.rows.length).toBe(1);
      expect(data.rows[0].email).toBe(userEmail);
    });
  });
});
