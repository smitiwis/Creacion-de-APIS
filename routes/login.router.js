const { Router } = require('express');
const { check } = require('express-validator');
const { loginController } = require('../controllers/login.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const routerLogin = Router();


routerLogin.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], loginController);


module.exports = routerLogin;