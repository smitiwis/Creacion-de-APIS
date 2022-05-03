const { model, Schema } = require('mongoose');


// CREACION DEL MODELO
const libroSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },

    edicion: {
        type: String,
        required: true
    },

    precio: {
        type: String,
        required: true
    },

    oferta: {
        type: Boolean,
        default: false,
    }

})


module.exports = model('libro', libroSchema)