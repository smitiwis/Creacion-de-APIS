const { Router } = require("express");
const {
    productosPost,
    productosGet,
    productosPut,
    productosDelete } = require("../controllers/productos.controller");



const productoRouter = Router();

productoRouter.get('/', productosGet);
productoRouter.post('/', productosPost);
productoRouter.put('/', productosPut);
productoRouter.delete('/', productosDelete);


module.exports = productoRouter

