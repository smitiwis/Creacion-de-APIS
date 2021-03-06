const { Schema, model } = require('mongoose');



const usuarioModel = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
    },

    correo: {
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
    },

    img: {
        type: String,
    },

    rol: {
        type: String,
        required: true,
    },

    estado: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    }

})

usuarioModel.methods.toJSON = function () {
    // EN ESTA LINEA SE EXTRAE Y SE RETORNA SOLO LOS CAMPOS
    // QUE DESEO RETORNAR
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;

    return usuario;
}


module.exports = model('Usuario', usuarioModel);