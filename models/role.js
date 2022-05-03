const { model, Schema } = require('mongoose');



const RoleModel = new Schema({
    rol: {
        type: String,
        required: [true, "El rol es obligatorio"]
    }
})


module.exports = model('Role', RoleModel)