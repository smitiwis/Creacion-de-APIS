const { request, response } = require('express');
const Libro = require('../models/libro');


const librosGet = (req = request, res = response) => {
    res.json({
        coneccion: "conexion --> GET exitosa ..."
    })
}

const librosPost = async (req = request, res = response) => {
    const body = req.body;
    const libro = new Libro(body);

    await libro.save();

    res.json({
        coneccion: "conexion --> POST exitosa ...",
        respuesta: {
            ...body
        }
    })
}


module.exports = {
    librosGet,
    librosPost
}