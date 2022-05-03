const mongoose = require('mongoose');

const URI = process.env.MONGO_CNN || 3000;
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const conecionDB = async () => {
    try {
        await mongoose.connect(URI, OPTIONS)
        console.log('Conexión exitosa...!')
    } catch (error) {
        console.log("ERRO: ", error);
        throw new Error("Error en la conexión...!")
    }

}

module.exports = conecionDB
