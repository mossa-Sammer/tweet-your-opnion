BEGIN;

INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'mossa', 'dbabesh', 'mossa@gmail.com', '$2b$10$3ZO9krXFLwtA6pYLg7MEDOr5VArM6IdLHtJRQJdKwQrdJP7BC3U2i
', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'sameer', 'ahmad', 'sameer@gmail.com', '$2b$10$4AirxH85eamvLM0wUeRwXOSNZT0VXvsdFH.4jYcPnw7ChPGxXfbpi', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age)  VALUES(
  'jhon', 'doe', 'jhon@gmail.com', '$2b$10$YUHMzsl.2MZa7HNkwiTXweoLTbz8IME8THHkLKn8qbXGhhAzYROTS', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'will', 'smith', 'will@gmail.com', '$2b$10$/GoQAsX1IQO9mRnQ22Yie.lxQ5590mBIuAHN7YhA57OrrCs99kSU2', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'kyle', 'well', 'kyle@gmail.com', '$2b$10$EAyUhzpGYBrYTNZrTkNb4.qQQb/4A.XvoKMfdn76Y8YwE2oU1Mzza', null, 20
);

INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'kyle', 'well', 'mossa5@gmail.com', '$2b$10$mL1ioC3Vnk/GaV6uMWAX0.M9Ki/sxxh1dJ8J4pFAhEpAXgmdKDQtK', null, 20
);

INSERT INTO posts (user_id, content) VALUES (1, 'this is fake post from fake data');

INSERT INTO comments (post_id, user_id, content) VALUES (1, 1, 'waw this is first fake comment'); 

INSERT INTO post_likes (user_id, post_id) VALUES (1, 1);
INSERT INTO post_likes (user_id, post_id) VALUES (2, 1);
INSERT INTO post_likes (user_id, post_id) VALUES (3, 1);

INSERT INTO comment_likes (user_id, post_id, comment_id) VALUES (1, 1, 1);
INSERT INTO comment_likes (user_id, post_id, comment_id) VALUES (2, 1, 1);
INSERT INTO comment_likes (user_id, post_id, comment_id) VALUES (3, 1, 1);


COMMIT;