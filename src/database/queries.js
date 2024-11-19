// Hotel reservations and rooms SQL queries
const hotelQueries = {
    getReservas: 'USE HOTEL; SELECT * FROM RESERVAS;',
    
    addReserva: `
        USE HOTEL;
        INSERT INTO Reservas 
        (NOMBRE, TELEFONO, EMAIL, HABITACION, FECHA_INICIO, FECHA_FIN)
        VALUES (@nombre, @telefono, @email, @habitacion, @fecha_inicio, @fecha_fin);
    `,
    
    addHabitacion: `
        USE HOTEL;
        INSERT INTO Habitaciones 
        (TITLE, PRICE, DESCRIPTION, IMAGEUPLOAD)
        VALUES (@title, @price, @description, @imageUpload);
    `
};

export default hotelQueries;



