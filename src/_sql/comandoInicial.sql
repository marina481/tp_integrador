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

USE HOTEL;

CREATE TABLE Habitaciones(
    ID INT IDENTITY(1,1) PRIMARY KEY,   
    TITLE VARCHAR(50) NOT NULL,           
    PRICE INT NOT NULL,                   
    DESCRIPTION VARCHAR(255) NOT NULL,       
    IMAGEUPLOAD VARCHAR(255) NOT NULL          
);

-- Insertar valores iniciales de prueba
INSERT INTO Habitaciones (TITLE, PRICE, DESCRIPTION, IMAGEUPLOAD)
VALUES ('PRUEBA', 123456, 'ESTA HABITACION ES DE PRUEBA', 'https://i.ibb.co/5syqck2/descarga.jpg');

-- Comprobar que los valores se hayan agregado correctamente
SELECT * FROM Habitaciones;


-- Eliminar por ID
DELETE FROM [dbo].[Habitaciones]
      WHERE ID=34
GO

--Actualizar por id unicamente en la base de datos
UPDATE [dbo].[Habitaciones]
   SET [TITLE] ='Sunset Boulevard'
      ,[PRICE] =1230000
      ,[DESCRIPTION] ='Habitación con baño en suite y amenities'
      ,[IMAGEUPLOAD] ='https://i.ibb.co/tBvPcX0/105031814.webp'
 WHERE ID=36
GO
