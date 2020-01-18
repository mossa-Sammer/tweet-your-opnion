BEGIN;

DROP TABLE IF EXISTS users, posts, post_likes, comments, comment_likes CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(10) NOT NULL,
  last_name VARCHAR(12) NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT Null,
  image_url VARCHAR,
  age INTEGER NOT NULL
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  content VARCHAR NOT NULL
);

CREATE TABLE post_likes(
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id)
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id),
  user_id INTEGER REFERENCES users(id),
  content VARCHAR NOT NULL
);

CREATE TABLE comment_likes(
  user_id INTEGER REFERENCES users(id),
  post_id INTEGER REFERENCES posts(id),
  comment_id INTEGER REFERENCES comments(id)
);

COMMIT;
