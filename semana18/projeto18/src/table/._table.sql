CREATE TABLE cookenu_users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL,
  password VARCHAR (64) NOT NULL
);
DROP TABLE cookenu_users;