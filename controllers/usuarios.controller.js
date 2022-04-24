const { request, response } = require('express')

const usuariosGet = (req = request, res = response) => {
    res.json({
        msg: 'Get API-Controller'
    })
}

const usuariosPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: 'Post API-Controller',
        ...body
    })
}

const usuariosPut = (req, res) => {
    const params = req.params;
    res.json({
        msg: 'Put API-Controller',
        idUsuario: params.id
    })
}

const usuariosDelete = (req, res) => {
    const query = req.query;
    console.log("QUERY", query)
    res.json({
        msg: 'Delete API-Controller',
        QUERY: query
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'Patch API-Controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}