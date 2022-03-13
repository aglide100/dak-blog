GRANT ALL PRIVILEGES ON DATABASE blog TO table_admin;

-- CREATE TABLE posts (
--     post_id serial,
--     title varchar(200),
--     author varchar(200),
--     thumbnail varchar(200),
--     picture_urls text[],
--     written_date text,
--     content text,
--     PRIMARY KEY(post_id),
-- );

-- CREATE TABLE accounts (
--     account_id varchar(80),
--     account_passwd varchar(200),
--     email varchar(100),
--     num serial,
--     account_name text,
--     subscription_date DATE NOT NULL DEFAULT CURRENT_DATE,
--     PRIMARY KEY(account_id),
-- );

-- CREATE TABLE comments(
--     FOREIGN KEY(account_id) REFERENCES accounts(account_id),
--     FOREIGN KEY(post_id) REFERENCES posts(post_id),
--     commnet text,
--     written_date DATE NOT NULL DEFAULT CURRENT_DATE,
-- );

/*
Created: 2021-10-03
Modified: 2021-10-04
Model: PostgreSQL 12
Database: PostgreSQL 12
*/

-- Create tables section -------------------------------------------------

-- Table Post
create table if not exists "Post"
(
    post_id      uuid not null
        constraint "PK_Post"
            primary key
        constraint post_id
            unique,
    title        text,
    written_date date,
    modify_date  date,
    content      text,
    thumnail     text,
    view_count   serial,
    account_id   uuid
)
    with (autovacuum_enabled = true);

alter table "Post"
    owner to table_admin;

create index if not exists "IX_Relationship4"
    on "Post" (account_id);

create table if not exists "Comment"
(
    comment_id   uuid not null
        constraint "PK_Comment"
            primary key
        constraint comment_id
            unique,
    written_date date,
    modify_date  date,
    content      text,
    account_id   uuid,
    post_id      uuid
)
    with (autovacuum_enabled = true);

alter table "Comment"
    owner to table_admin;

create index if not exists "IX_Relationship5"
    on "Comment" (account_id);

create index if not exists "IX_Relationship7"
    on "Comment" (post_id);

create table if not exists "Account"
(
    nick_name   text,
    token       text,
    email       text,
    joined_date date,
    account_id  uuid not null
        constraint "PK_Account"
            primary key
        constraint account_id
            unique
)
    with (autovacuum_enabled = true);

alter table "Account"
    owner to table_admin;

create table if not exists "Picture_URL"
(
    "picture_URL" text,
    post_id       uuid
)
    with (autovacuum_enabled = true);

alter table "Picture_URL"
    owner to table_admin;

create index if not exists "IX_Relationship2"
    on "Picture_URL" (post_id);

create table if not exists "GithubFile"
(
    "Name"    varchar,
    "Path"    varchar,
    "Url"     varchar,
    "Dir"     boolean,
    "Content" varchar
);

alter table "GithubFile"
    owner to table_admin;

