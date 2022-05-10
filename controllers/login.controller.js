const bcryptjs = require('bcryptjs');
const { response } = require('express');
const { request } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');

const Usuario = require('../models/usuario');




const loginController = async (req = request, res = response) => {
    const { correo, password } = req.body

    try {
        // VALIDAR QUE EL CORREO QUE EXISTA
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Correo / Password no son correctos --> CORREO'
            })
        } else {
            // VALIDAR SI EL USUARIO ENCONTRADO TIENE ESTADO = TRUE 
            if (!usuario.estado) {
                return res.status(400).json({
                    msg: `Correo / Password no son correctos --->  USUARIO:${usuario.estado}`
                })
            }
        }

        // VALIDAR SI LA CONTRASEÑA ES CORRECTA
        const isValidPassword = await bcryptjs.compare(password, usuario.password);

        if (!isValidPassword) {
            return res.status(400).json({
                msg: `Correo / Password no son correctos --->  PASSWORD:: ${isValidPassword}`
            })
        }

        // GENERAR EL JWT
        const token = await generarJWT( usuario._id );

        // SI TODO VA BIEN
        res.json({
            coneccion: "Login POST EXITOSA...",
            usuario,
            token
        })

    } catch (error) {
        console.log("ERROR: ", error);
        return res.status(500).json({
            msg: "Error del servidor"
        })
    }
}



module.exports = {
    loginController
}