
USE seinfeld_db;
CREATE TABLE actors
(
    id INT NOT NULL
    AUTO_INCREMENT,
    character_name VARCHAR
    (30) NULL,
    coolness_points INT
    NOT NULL,
    attitude VARCHAR
    (30) NULL,
        PRIMARY KEY
    (id)
);
    INSERT INTO actors
        (character_name, coolness_points, attitude)
    VALUES
        ("Jerry Seinfeld", 50, "comedian");
    INSERT INTO actors
        (character_name, coolness_points, attitude)
    VALUES
        ("George Costanza", 50, "unemployed");
    INSERT INTO actors
        (character_name, coolness_points, attitude)
    VALUES
        ("Cosmo Kramer", 50, "Kramerica Industries");
    INSERT INTO actors
        (character_name, coolness_points, attitude)
    VALUES
        ("Elaine Benes", 50, "publishers assistant");