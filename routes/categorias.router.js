const { Router } = require("express");
const {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    categoriasPut,
    categoriasDelete } = require("../controllers/categorias.controller");

const { validarJWT } = require('../middlewares/validar-JWT');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require("express-validator");
const { existeCategoriaPorId } = require("../helpers/db-validators");

const routerCategoria = Router();

// Obtener todas las categorias - publico
routerCategoria.get('/', obtenerCategorias);

// Obtener una categoria por id - publico
routerCategoria.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], obtenerCategoria);

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

