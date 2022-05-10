const { Router } = require("express");
const {
    categoriasPost,
    categoriasGet,
    categoriasPut,
    categoriasDelete } = require("../controllers/categorias.controller");



const routerCategoria = Router();

routerCategoria.get('/', categoriasGet);
routerCategoria.post('/', categoriasPost);
routerCategoria.put('/', categoriasPut);
routerCategoria.delete('/', categoriasDelete);


module.exports = routerCategoria

