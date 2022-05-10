
const { model, Schema } = require('mongoose');


const productoModel = new Schema({
    nombre: {
        type: String,
        required: true
    }

})

productoModel.methods.toJSON = function () {
    // EN ESTA LINEA SE EXTRAE Y SE RETORNA SOLO LOS CAMPOS
    // QUE DESEO RETORNAR
    const { __v, password, _id, ...producto } = this.toObject();
    // producto.uid = _id;

    return producto;
}


module.exports = model('Producto', productoModel)