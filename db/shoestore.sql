CREATE DATABASE shoestore;
USE shoestore;

CREATE TABLE marcas(
id_marca INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL UNIQUE,
logo_url VARCHAR(100)
);

CREATE TABLE productos(
id_producto INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
precio FLOAT NOT NULL,
disponible BOOL,
fk_marca INT,
FOREIGN KEY (fk_marca) REFERENCES marcas(id_marca)
);

INSERT INTO marcas(nombre,logo_url)
VALUES("nike","https://blancfestival.com/wp-content/uploads/2022/05/Nike_1985_cuadrado_rojo.png"),
("lacoste","https://www.escapeshoes.com/wp-content/uploads/2021/05/Logo-Lacoste.png"),
("adidas","https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg");

INSERT INTO productos(nombre,precio,disponible,fk_marca)
VALUES("Air Jordan 1", 130, true, 1),
("Baseshot", 110, true,2),
("Samba OG", 120, false,3),
("Air Max Plus",145, true,1);

  