const { request, response } = require("express");



const validarROLS = (...roles) => {

    console.log("ROLESS:", roles);

    return (req = request, res = response, next) => {

        const { nombre, rol } = req.userAuth;

        if (!roles.includes(rol)) {
            return res.status(401).json({
                msg: `El ${nombre} debe ser ${roles}`
            })
        }
        next();
    }

}

module.exports = {
    validarROLS
}