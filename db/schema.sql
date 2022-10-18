USE tracker;


CREATE TABLE cardio (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    intensity VARCHAR(100) NOT NULL
);

CREATE TABLE height (
    id          INTEGER AUTO_INCREMENT PRIMARY KEY,
    feet        INT,
    inches      INT
);

CREATE TABLE weight (
    id          INTEGER AUTO_INCREMENT PRIMARY KEY,
    lbs         INTEGER
);

CREATE TABLE user (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INTEGER NOT NULL,
    height INT REFERENCES height(id),
    weight INT REFERENCES weight(id),
    gender VARCHAR(30) NOT NULL,
    cardio_id INTEGER NULL
);


SELECT * FROM cardio;
SELECT * FROM height;
SELECT * FROM weight;
SELECT * FROM user;