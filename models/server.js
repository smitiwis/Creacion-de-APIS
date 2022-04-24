require('dotenv').config();

const express = require('express')
const cors = require('cors');
const app = express()


class Server {
    app = app;
    port = process.env.PORT;
    usuariosPth = '/api/usuarios';
    librosPath = '/api/libros';

    constructor() {
        // Middlewares
        this.middlewares();

        // Rutas de la aplicacion
        this.routes();
    }

    
    middlewares() {
        // COORS
        this.app.use(cors())

        // PARSEO Y LECTURA DEL BODY (LEER EL REQUEST DE LAS PETICIONES)
        this.app.use( express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPth, require('../routes/usuarios.router'));
        this.app.use(this.librosPath, require('../routes/libros.router'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Corriendo en ", this.port)
        })
    }




}

module.exports = Server;