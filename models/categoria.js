
const { model, Schema } = require('mongoose');


const categoriaModel = new Schema({

    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']
    },

    estado: {
        type: Boolean,
        default: true,
        required: true
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', // Igual al nombre del modelo que 
        required: true
    }

})

module.exports = model('Categoria', categoriaModel)