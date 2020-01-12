BEGIN;

DROP TABLE IF EXISTS users, posts, comments CASCADE;

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
  content TEXT NOT NULL,
  likes JSON[] --userid
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id),
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  likes JSON[] --userid
);

COMMIT;
