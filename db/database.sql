CREATE DATABASE IF NOT EXISTS postsdb;

USE postsdb;

CREATE TABLE posts (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) DEFAULT NULL,
  description VARCHAR(200) DEFAULT NULL,
  likes INT(11) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE posts;

INSERT INTO posts (title, description, likes) values 
  ('Marruecos en el mundial', 'Llega a cuartos por primera vez en la historia', 6839),
  ('Las Palmas', 'Liderando la tabla de la segunda division', 2130);

SELECT * FROM posts;
