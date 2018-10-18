-- create database grocery_list(drop if exists)
-- use grocery_list database
-- create table with cols id, item, quality
-- insert three test values
CREATE DATABASE checkout;
USE checkout;

CREATE TABLE account (
  id INT AUTO_INCREMENT PRIMARY KEY ,
  count INT,
  name TEXT, 
  email TEXT,
  password TEXT,
  line1 TEXT,
  line2 TEXT,
  city TEXT,
  state TEXT,
  zipCode INT,
  phone INT,
  creditCard INT,
  expDate INT,
  CVV INT,
  billingZip INT
);
INSERT INTO account (count, name, email, password, line1, line2, city, state, zipCode, phone, creditCard, expDate, CVV, billingZip) VALUES (12, 'jawad', 'jawad@yahoo.com', 'hi', '232342 streeet', '1234 market', 'fremont', 'CAL', 12342, 13555, 123423, 2342, 252352, 12342)
-- 12, 'jawad', 'jawad@yahoo.com', 'hi', '232342 streeet', '1234 market', 'fremont', 'CAL', 12342, 13555, 123423, 2342, 252352, 12342