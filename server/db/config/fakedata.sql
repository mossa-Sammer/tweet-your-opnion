BEGIN;

INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'mossa', 'dbabesh', 'mossa@gmail.com', '123', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'sameer', 'ahmad', 'sameer@gmail.com', '123', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age)  VALUES(
  'jhon', 'doe', 'jhon@gmail.com', '123234', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'will', 'smith', 'will@gmail.com', '123', null, 20
);
INSERT INTO users (first_name, last_name,email,password,image_url, age) VALUES(
  'kyle', 'well', 'kyle@gmail.com', '123', null, 20
);

INSERT INTO posts (user_id, content) VALUES (1, 'this is fake post from fake data');

INSERT INTO comments (post_id, user_id, content) VALUES (1,1,'waw this is first fake comment'); 

COMMIT;