const { Router } = require("express");
const {
    crearCategoria,
    categoriasGet,
    categoriasPut,
    categoriasDelete } = require("../controllers/categorias.controller");

const { validarJWT } = require('../middlewares/validar-JWT');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require("express-validator");

const routerCategoria = Router();

// Obtener todas las categorias - publico
routerCategoria.get('/', categoriasGet);

// Obtener una categoria por id - publico
routerCategoria.get('/:id', categoriasGet);

// Crear categoria - privado - cualqueir persona con un token valido
routerCategoria.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

// Actualizar - privado - cualquiera con token valido
routerCategoria.put('/:id', categoriasPut);

// Borrar categoria solo si es ADMIN
routerCategoria.delete('/:id', categoriasDelete);


module.exports = routerCategoria

