
const { model, Schema } = require('mongoose');


const categoriaModel = new Schema({
    nombre: {
        type: String,
        required: true
    }

})

categoriaModel.methods.toJSON = function () {
    // EN ESTA LINEA SE EXTRAE Y SE RETORNA SOLO LOS CAMPOS
    // QUE DESEO RETORNAR
    const { __v, _id, ...categoria } = this.toObject();
    // categoria.uid = _id;

    return categoria;
}


module.exports = model('Categoria', categoriaModel)