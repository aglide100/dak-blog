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

CREATE TABLE "Post"
(
  "post_id" UUID NOT NULL,
  "title" Text,
  "written_date" Date,
  "modify_date" Date,
  "content" Text,
  "thumnail" Text,
  "view_count" Serial,
  "account_id" UUID
)
WITH (
  autovacuum_enabled=true)
;

CREATE INDEX "IX_Relationship4" ON "Post" ("account_id")
;

ALTER TABLE "Post" ADD CONSTRAINT "PK_Post" PRIMARY KEY ("post_id")
;

ALTER TABLE "Post" ADD CONSTRAINT "post_id" UNIQUE ("post_id")
;

-- Table Comment

CREATE TABLE "Comment"
(
  "comment_id" UUID NOT NULL,
  "written_date" Date,
  "modify_date" Date,
  "content" Text,
  "account_id" UUID,
  "post_id" UUID
)
WITH (
  autovacuum_enabled=true)
;

CREATE INDEX "IX_Relationship5" ON "Comment" ("account_id")
;

CREATE INDEX "IX_Relationship7" ON "Comment" ("post_id")
;

ALTER TABLE "Comment" ADD CONSTRAINT "PK_Comment" PRIMARY KEY ("comment_id")
;

ALTER TABLE "Comment" ADD CONSTRAINT "comment_id" UNIQUE ("comment_id")
;

-- Table Account

CREATE TABLE "Account"
(
  "nick_name" Text,
  "token" Text,
  "email" Text,
  "joined_date" Date,
  "account_id" UUID NOT NULL
)
WITH (
  autovacuum_enabled=true)
;

ALTER TABLE "Account" ADD CONSTRAINT "PK_Account" PRIMARY KEY ("account_id")
;

ALTER TABLE "Account" ADD CONSTRAINT "account_id" UNIQUE ("account_id")
;

-- Table Picture_URL

CREATE TABLE "Picture_URL"
(
  "picture_URL" Text,
  "post_id" UUID
)
WITH (
  autovacuum_enabled=true)
;

CREATE INDEX "IX_Relationship2" ON "Picture_URL" ("post_id")
;

-- Create foreign keys (relationships) section -------------------------------------------------

ALTER TABLE "Post"
  ADD CONSTRAINT "Relationship1"
    FOREIGN KEY ()
    REFERENCES "Picture_URL" ()
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
;

ALTER TABLE "Picture_URL"
  ADD CONSTRAINT "Has array"
    FOREIGN KEY ("post_id")
    REFERENCES "Post" ("post_id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
;

ALTER TABLE "Post"
  ADD CONSTRAINT "Post(n) to Account(1)"
    FOREIGN KEY ("account_id")
    REFERENCES "Account" ("account_id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
;

ALTER TABLE "Comment"
  ADD CONSTRAINT "Comment(n) to Account(1)"
    FOREIGN KEY ("account_id")
    REFERENCES "Account" ("account_id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
;

ALTER TABLE "Comment"
  ADD CONSTRAINT "Comment(n) to Post(1)"
    FOREIGN KEY ("post_id")
    REFERENCES "Post" ("post_id")
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
;

