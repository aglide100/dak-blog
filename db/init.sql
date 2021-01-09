--CREATE ROLE review_admin LOGIN CREATEDB PASSWORD POSTGRES_PASSWORD;
GRANT ALL PRIVILEGES ON DATABASE chicken_review TO review_admin;

--ALTER USER review_admin WITH SUPERUSER;

--CREATE EXTENSION pgcrypto;

CREATE TABLE post (
    ID      serial PRIMARY KEY,
    Title   varchar(200),
    Author  varchar(200),
    DefaultPictureURL   varchar(200),
    PictureURLS     text[],
    Date            text,
    Comment         text,
);

CREATE TABLE account (
    UserID varchar(80),
    UserPWD varchar(200),
    Num serial,
    Name text,
    PhoneNumber text,
    Language text,
    SubscriptionDate DATE NOT NULL DEFAULT CURRENT_DATE
);
