const { request, response } = require("express")

const Categoria = require('../models/categoria');


const crearCategoria = async (req = request, res = response) => {

    const nombre = req.body.nombre.toUpperCase();

    // Validar que el nombre de la categoria no se REPITA
    const categoriaDB = await Categoria.findOne({ nombre });
    if (categoriaDB) {
        return res.status(401).json({
            msg: "La categoria ya fue CREADA"
        })
    }

    // PREPARAR LA DATA PARA GUARDAR
    const data = {
        nombre,
        usuario: req.userAuth._id
    }
    const categoria = new Categoria(data) //Prepara el modelo para guardar en al bd

    // GUARDAR EN LA BD
    await categoria.save();

    return res.status(201).json({
        msg: "Categorias --> POST :: Categoria creada"
    })
}

const categoriasGet = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> GET"
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
    categoriasGet,
    categoriasPut,
    categoriasDelete
}