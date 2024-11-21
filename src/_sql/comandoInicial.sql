-- Crear la tabla

USE HOTEL

CREATE TABLE Reservas (
ID INT IDENTITY (1,1) PRIMARY KEY,
NOMBRE VARCHAR(50) NOT NULL,
TELEFONO INT NOT NULL,
EMAIL VARCHAR(50) NOT NULL,
HABITACION INT NOT NULL,
FECHA_INICIO DATE NOT NULL,
FECHA_FIN DATE NOT NULL
)


-- Insertar valores iniciales de prueba

INSERT INTO Reservas (NOMBRE, TELEFONO, EMAIL, HABITACION, FECHA_INICIO, FECHA_FIN)
VALUES ('Juan Perez',123456,'juanperez@test.com',101,'2024-01-01','2024-01-07')



-- Comprobar que los valores se hayan agregado correctamente

SELECT * FROM Reservas

CREATE TABLE Resenas (
    DESCRIPCION VARCHAR(500) NOT NULL
);

INSERT INTO Resenas (DESCRIPCION)
VALUES ('Excelente estadía. Las habitaciones eran cómodas');

SELECT * FROM Resenas;
