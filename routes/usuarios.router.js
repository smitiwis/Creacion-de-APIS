const { Router } = require("express");
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
} = require("../controllers/usuarios.controller");

const routerUsuarios = Router();

routerUsuarios.get("/", usuariosGet);

routerUsuarios.post("/", usuariosPost);

routerUsuarios.put("/:id", usuariosPut);

routerUsuarios.delete("/", usuariosDelete);

routerUsuarios.patch("/", usuariosPatch);

module.exports = routerUsuarios;
