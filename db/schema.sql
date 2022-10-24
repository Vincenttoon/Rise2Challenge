DROP TABLE IF EXISTS exercise;

CREATE TABLE exercise(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    ex_name VARCHAR(30),
    intensity VARCHAR(30),
    ex_type VARCHAR(30)
);
