export default {
    getReservas:'USE HOTEL SELECT * FROM RESERVAS',
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
    @fecha_fin);`
}
