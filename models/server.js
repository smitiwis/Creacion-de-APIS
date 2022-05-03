require('dotenv').config();


const express = require('express')
const cors = require('cors');
const app = express();

const conecionDB = require('../database/config.db');


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

        // CONEXION A LA BASE DE DATOS
        this.conexionDB();

        // PARSEO Y LECTURA DEL BODY (LEER EL REQUEST DE LAS PETICIONES)
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))
    }

    async conexionDB() {
        await conecionDB();
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