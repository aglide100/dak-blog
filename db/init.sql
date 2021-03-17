GRANT ALL PRIVILEGES 
ON DATABASE blog TO table_admin;
--CREATE EXTENSION pgcrypto;
CREATE TABLE post ( ID serial PRIMARY KEY, Title varchar(200), Author varchar(200), DefaultPictureURL varchar(200), PictureURLS text[], Date text, Comment text );
CREATE TABLE account ( UserID varchar(80), UserPWD varchar(200), Num serial, Name text, PhoneNumber text, Language text, SubscriptionDate DATE NOT NULL DEFAULT CURRENT_DATE );
