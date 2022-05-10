
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
    const { __v, password, _id, ...usuario } = this.toObject();
    // usuario.uid = _id;

    return usuario;
}


module.exports = model('Producto', productoModel)