const { response } = require("express")
const { request } = require("express")

const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');




const validarJWT = async (req = request, res = response, next) => {
    const key = process.env.SECRETORPRIVATEKEY;
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: "El token es encesario para la petición"
        })
    }

    try {

        const { uid } = jwt.verify(token, key);
        // obtener al usuario con el uid del jwt
        const userAuth = await Usuario.findById(uid);

        if (!userAuth) {
            return res.status(401).json({
                msg: "Token no válido || Usuario no existe BD"
            })
        }

        // Validar si el usuario tiene estado TRUE o FALSE
        if (!userAuth.estado) {
            return res.status(401).json({
                msg: "Token no válido || Usuario estado : false"
            })
        }



        req.userAuth = userAuth;

        next();
    } catch (error) {
        console.log("ERROR: ", error)
    }
}

module.exports = {
    validarJWT
}