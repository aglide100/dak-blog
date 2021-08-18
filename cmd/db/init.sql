GRANT ALL PRIVILEGES ON DATABASE blog TO table_admin;

CREATE TABLE posts (
    post_id serial,
    title varchar(200),
    author varchar(200),
    thumbnail varchar(200),
    picture_urls text[],
    written_date text,
    content text,
    PRIMARY KEY(post_id),
);

CREATE TABLE accounts (
    account_id varchar(80),
    account_passwd varchar(200),
    email varchar(100),
    num serial,
    account_name text,
    subscription_date DATE NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY(account_id),
);

CREATE TABLE comments(
    FOREIGN KEY(account_id) REFERENCES accounts(account_id),
    FOREIGN KEY(post_id) REFERENCES posts(post_id),
    commnet text,
    written_date DATE NOT NULL DEFAULT CURRENT_DATE,
);