
const Categoria = require('../models/categoria');
const RoleModel = require('../models/role');
const usuarioModel = require('../models/usuario');


const esRoleValido = async (rol = '') => {
    const existeRol = await RoleModel.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe en la BD`)
    }
}

const emailExiste = async (correo = '') => {
    // Validar si el correo existe o para valores del modelo "Unique"
    const existeEmail = await usuarioModel.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe en la BD`)
    }
}

const existeUsuarioConId = async (id = '') => {
    // Validar si el id para ver is existe o no en la BD
    const existeUsuario = await usuarioModel.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id :  ${id} no existe en la BD`);
    }
}


const existeCategoriaPorId = async (id ) => {

    const existeCategoria = await Categoria.findById(id);

    if (!existeCategoria) {
        throw new Error(`El id = ${id} no es válido`)
    }

}





module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioConId,
    existeCategoriaPorId
}