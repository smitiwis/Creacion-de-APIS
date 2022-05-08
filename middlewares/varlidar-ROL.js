const { request, response } = require("express")



const validarROL = (req = request, res = response, next) => {
    const { rol, nombre } = req.userAuth;

    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${nombre} no es Administrador...!`
        })
    }

    next();
}

module.exports = {
    validarROL
}