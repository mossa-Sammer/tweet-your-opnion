const { deletePost } = require('../../db/queries/');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('delete user query', () => {
  beforeAll(() => {
    return initDatabase();
  });
  afterAll(() => {
    return connection.end();
  });

  test('delete post by id', () => {
    expect.assertions(1);
    const input = {
      id: 1,
    };
    return deletePost(input).then(data => {
      expect(data.rows[0].id).toBe(input.id);
    });
  });
});
