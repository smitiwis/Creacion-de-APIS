const { request, response } = require('express');


const librosGet = (req = request, res = response) => {
    res.json({
        coneccion: "conexion --> GET exitosa ..."
    })
}

const librosPost = (req = request, res = response) => {
    const body = req.body;

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