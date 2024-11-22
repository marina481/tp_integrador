// Hotel reservations and rooms SQL queries
const hotelQueries = {
    getReservas: 'USE HOTEL; SELECT * FROM RESERVAS;',

    addReserva: `
        USE HOTEL;
        INSERT INTO Reservas 
        (NOMBRE, TELEFONO, EMAIL, HABITACION, FECHA_INICIO, FECHA_FIN)
        VALUES (@nombre, @telefono, @email, @habitacion, @fecha_inicio, @fecha_fin);
    `,

}

    export default {
        getReservas: 'USE HOTEL SELECT * FROM RESERVAS',
        addReserva: `USE HOTEL INSERT INTO Reservas
    (NOMBRE,
    TELEFONO,
    EMAIL,
    HABITACION,
    FECHA_INICIO,
    FECHA_FIN) 
    VALUES (
    @nombre,
    @telefono,
    @email,
    @habitacion,
    @fecha_inicio,
    @fecha_fin);`,

        getReservabyId: 'USE HOTEL SELECT * FROM RESERVAS WHERE ID = @id',

        deleteReserva: 'USE HOTEL DELETE FROM RESERVAS WHERE ID = @id',

        getResenas: 'USE HOTEL SELECT * FROM RESENAS',

        addResenas: `USE HOTEL INSERT INTO Resenas (DESCRIPCION) VALUES (@descripcion);`,

        getHabitaciones: 'USE HOTEL; SELECT * FROM HABITACIONES;',


        addHabitacion: `
        USE HOTEL;
        INSERT INTO Habitaciones 
        (TITLE, PRICE, DESCRIPTION, IMAGEUPLOAD)
        VALUES (@title, @price, @description, @imageUpload);
    `
    }

