const { addComment } = require('../../db/queries/');
const connection = require('../../db/config/connection');
const initDatabase = require('../../db/config/build');

describe('testin add commnet query', () => {
  beforeAll(() => {
    return initDatabase();
  });
  afterAll(() => {
    return connection.end();
  });

  test('add comment query', () => {
    expect.assertions(1);
    const commentData = {
      postId: '1',
      userId: '1',
      content: 'hey, fist comment',
    };

    return addComment(commentData).then(data => {
      expect(data.rows[0].post_id).toBe(1);
    });
  });
});
