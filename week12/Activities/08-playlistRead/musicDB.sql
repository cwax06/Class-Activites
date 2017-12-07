DROP DATABASE IF EXISTS musicDB;

CREATE DATABASE musicDB;

USE musicDB;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NULL,
    artist VARCHAR(45) NULL,
    genre VARCHAR(45) NULL,

)


INSERT INTO songs (title, artist, genre)
VALUES ("Ice Ice Baby", "Vanilla Ice", "Funk");

INSERT INTO songs (title, artist, genre)
VALUES ("TNT", "AC/DC", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES ("Nobody Knows", "Lumineers", "Folk");

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
