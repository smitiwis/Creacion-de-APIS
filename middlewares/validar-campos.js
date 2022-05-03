const { validationResult } = require('express-validator');



// Por ser un middleware tiene un tercer parametro
const validarCampos = (req, res, next) => {
    // Muestra los errores que se acumulan en Middlewares (o en las Rutas de usaurio donde se encuentras los middlewares)
    const errors = validationResult(req);
    if (!errors.isEmpty()) { // errors.isEmpty  ==> Que no hay errores
        return res.status(400).json(errors);
    }

    // Solo si cae en el return este next no se ejecutará.
    next();
}




module.exports = {
    validarCampos
}