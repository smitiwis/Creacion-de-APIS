const { Router } = require('express');
const { librosGet, librosPost } = require('../controllers/libros.controller');

const routerLibros = Router();


routerLibros.get('/', librosGet);
routerLibros.post('/', librosPost);


module.exports = routerLibros;