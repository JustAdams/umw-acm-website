CREATE DATABASE acmdatabase;
\c acmdatabase

DROP TABLE IF EXISTS newsposts;

CREATE TABLE newsposts (
    post_id SERIAL PRIMARY KEY,
    post_title TEXT NOT NULL,
    post_date DATE DEFAULT CURRENT_DATE,
    post_content TEXT NOT NULL
);

DROP TABLE IF EXISTS members;

CREATE TABLE members (
    member_name TEXT NOT NULL,
    member_email TEXT NOT NULL,
    join_date DATE DEFAULT CURRENT_DATE
);

INSERT INTO newsposts (post_id, post_title, post_content) VALUES
    (0, 'First post!', 'This is the first news post. The website is official!');

INSERT INTO members (member_name, member_email) VALUES
    ('First Last', 'umw@mail.umw.edu');
