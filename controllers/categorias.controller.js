const { request, response } = require("express")

const Categoria = require('../models/categoria');


const crearCategoria = async (req = request, res = response) => {

    const nombreCategoria = req.body.nombre.toUpperCase();

    // Validar que el nombre de la categoria no se REPITA
    const categoriaDB = await Categoria.findOne({ nombre: nombreCategoria });
    if (categoriaDB) {
        return res.status(401).json({
            msg: "La categoria ya fue CREADA"
        })
    }

    // PREPARAR LA DATA PARA GUARDAR
    const data = {
        nombre: nombreCategoria,
        usuario: req.userAuth._id
    }
    const categoria = new Categoria(data) //Prepara el modelo para guardar en al bd

    // GUARDAR EN LA BD
    await categoria.save();

    return res.status(201).json({
        msg: "Categorias --> POST :: Categoria creada"
    })
}

const obtenerCategorias = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query; // el "5" y "0" son valores en caso front no mande esos valores
    // Esta queri dice --> Traeme todos las categorias con ESTADO = TRUE
    const query = { estado: true };

    const [categoria, total] = await Promise.all([
        Categoria.find(query)
            .populate('usuario', 'nombre')
            // .populate({ path: 'usuario', select: 'nombre' }) // --> Ambos son iguales
            .skip(parseInt(desde))
            .limit(Number(limite)),

        Categoria.countDocuments(query)
    ])

    return res.json({
        msg: "Categorias --> GET :: Categorias",
        total,
        categoria
    })

}

const obtenerCategoria = async (req = request, res = response) => {

    const { id } = req.params;

    Categoria.findById(id).populate('usuario', 'nombre')
        .exec((err, categoriaEncontrada) => {
            if (err) {
                return res.status(500).json({
                    msg: err
                })
            }

            return res.json({
                msg: "Categorias --> GET :: Categoria Id",
                categoria: categoriaEncontrada 
            })
        })


}

const categoriasPut = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> PUT"
    })
}

const categoriasDelete = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> DELETE"
    })
}


module.exports = {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    categoriasPut,
    categoriasDelete
}