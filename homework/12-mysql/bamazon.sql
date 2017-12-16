CREATE TABLE products
(
    position INT NOT NULL,
    item_id VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,4) NULL,
    stock_quantity DECIMAL(10,4) NULL,
    PRIMARY KEY (position)
);
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
    position INT NOT NULL
    AUTO_INCREMENT,
    item_id VARCHAR
    (45) NULL,
    product_name VARCHAR
    (30) NULL,
    department_name VARCHAR
    (30) NULL,
    price DECIMAL
    (10,2) NULL,
    stock_quantity DECIMAL
    (10,4) NULL,
    PRIMARY KEY
    (position)
);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("vanilla", "ice cream", 2.50, 100);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("chocolate", "ice cream", 3.10, 120);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("strawberry", "ice cream", 3.25, 75);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("tires", "auto", 53.25, 75);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("wiper blades", "auto", 13.25, 50);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("horn", "auto", 23.25, 175);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("baloons", "party", .25, 2075);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("whistles", "party", 1.25, 75);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("basketball", "sports", 10.25, 75);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("baseball", "sports", 2.25, 275);