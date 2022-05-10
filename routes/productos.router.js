const { Router } = require("express");
const {
    productosPost,
    productosGet,
    productosPut,
    productosDelete } = require("../controllers/productos.controller");



const routerProductos = Router();

routerProductos.get('/', productosGet);
routerProductos.post('/', productosPost);
routerProductos.put('/', productosPut);
routerProductos.delete('/', productosDelete);


module.exports = routerProductos

