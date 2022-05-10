const { request, response } = require("express")



const categoriasPost = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> POST"
    })
}

const categoriasGet = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> GET"
    })
}

const categoriasPut = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> PuT"
    })
}

const categoriasDelete = (req = request, res = response) => {

    return res.json({
        msg: "Categorias --> DELETE"
    })
}


module.exports = {
    categoriasPost,
    categoriasGet,
    categoriasPut,
    categoriasDelete
}