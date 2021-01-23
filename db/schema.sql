DROP DATABASE IF EXISTS burgers_db
CREATE DATABASE burgers_db
USE burgers_db

###########################
###    CREATE TABLES    ###
###########################
CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(35) NOT NULL,
	devoured BOOL NOT NULL DEFAULT FALSE,
	PRIMARY KEY (id)
)