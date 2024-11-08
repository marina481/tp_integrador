import express from 'express'
import { expressConfig } from './config.js'

// import './src/database/conexion.js'

const app = express()

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Servidor corriendo en 'http://${app.get('host')}:${app.get('port')}`)
})

// esto después lo sacamos cuando hagamos las rutas de la API, era para ver si funciona el servidor
app.get('/', (req,res) => {
    res.send('<h1>Hola Mundo! Bienvenidos al Server con Express</h1>')
});
