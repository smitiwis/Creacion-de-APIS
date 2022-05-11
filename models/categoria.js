
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

categoriaModel.methods.toJSON = function () {
    // EN ESTA LINEA SE EXTRAE Y SE RETORNA SOLO LOS CAMPOS
    // QUE DESEO RETORNAR
    const { __v, estado, ...categoria } = this.toObject();

    return categoria;
}


module.exports = model('Categoria', categoriaModel)