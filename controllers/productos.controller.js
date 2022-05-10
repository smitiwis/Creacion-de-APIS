const { request, response } = require("express");



const productosGet = (req = request, res = response) => {

    res.json({
        msg: "PROODUCTOS --> GET"
    })
}

const productosPost = (req = request, res = response) => {

    res.json({
        msg: "PROODUCTOS --> POST"
    })
}

const productosPut = (req = request, res = response) => {

    res.json({
        msg: "PROODUCTOS --> PUT"
    })
}

const productosDelete = (req = request, res = response) => {

    res.json({
        msg: "PROODUCTOS --> DELETE"
    })
}


module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}