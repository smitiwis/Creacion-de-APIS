const { Router } = require("express");
const { check } = require("express-validator");

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
} = require("../controllers/usuarios.controller");
const { esRoleValido, emailExiste, existeUsuarioConId } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-JWT");
const { validarROLS } = require("../middlewares/validar-ROLS");
const { validarROL } = require("../middlewares/varlidar-ROL");


const routerUsuarios = Router();


routerUsuarios.get("/",[
   
], usuariosGet);

// Se puede pasar middlewares como segundo argumento, antes del controlador
// check e sun middleware que se le peude decir que campo del body necesitamos revisar
routerUsuarios.post("/",
    [
        check('nombre', 'Nombre es Obligatorio').not().isEmpty(),
        check('password', 'Passowrd debe ser más de 6 letras').isLength({ min: 6 }),
        check('correo', 'Correo ingresado no es valido').isEmail(),
        check('correo').custom(emailExiste),

        // check('rol', 'El rol ingresado no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        // Se valida si el rol existe en la BD de Roles en caso no exista lanza el error
        check('rol').custom(esRoleValido),
        validarCampos
    ],
    usuariosPost);

routerUsuarios.put("/:id", [
    check('id', 'El ID ingresado no es válido').isMongoId(),
    check('id').custom(existeUsuarioConId),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPut);

routerUsuarios.delete("/:id",[
    validarJWT,
    // validarROL,
    validarROLS('ADMIN_ROLE', 'USER_ROLE', 'RANDOM_ROLE'),
    check('id', 'El ID ingresado no es válido').isMongoId(),
    check('id').custom(existeUsuarioConId),
    validarCampos
], usuariosDelete);

routerUsuarios.patch("/", usuariosPatch);



module.exports = routerUsuarios;
