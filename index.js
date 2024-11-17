import express from 'express'
import { expressConfig } from './config.js'
import hotelRoutes from './src/routes/hotel.routes.js'
import cors from 'cors'

// import './src/database/conexion.js'

const app = express()

const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

app.use(express.json())
app.use(hotelRoutes)

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Servidor corriendo en 'http://${app.get('host')}:${app.get('port')}`)
})

// esto después lo sacamos cuando hagamos las rutas de la API, era para ver si funciona el servidor
app.get('/', (req,res) => {
    res.send('<h1>Hola Mundo! Bienvenidos al Server con Express</h1>')
});
