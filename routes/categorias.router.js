const { Router } = require("express");
const {
    categoriasPost,
    categoriasGet,
    categoriasPut,
    categoriasDelete } = require("../controllers/categorias.controller");



const categoriaRouter = Router();

categoriaRouter.get('/', categoriasGet);
categoriaRouter.post('/', categoriasPost);
categoriaRouter.put('/', categoriasPut);
categoriaRouter.delete('/', categoriasDelete);


module.exports = categoriaRouter

