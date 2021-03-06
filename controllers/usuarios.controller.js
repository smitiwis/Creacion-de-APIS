const bcryptjs = require('bcryptjs');
const { request, response } = require('express');
const Usuario = require('../models/usuario');


const usuariosGet = async (req = request, res = response) => {


    // Traer todos los usuarios de la BD --> el cual viene como un array de objetos
    // const usuarios = await Usuario.find();

    // const usuarios = await Usuario.find().limit(3); // Traer los tres primeros usaurios de la BD


    // limite es el numero de registros a TRAER de la BD, desde quiere decir desde que usuario traera los datos solicitados
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    // Al tener dos await el cual no depende uno del otro, estos tiene una demora sumada
    // es decir que si los dos demoran 3 segundo en total seran 6 egundo al ser procesados
    // Condiciona para que solo traigue los usuarios con el estado true --> tanto para el total como el paginado
    // const usuarios = await Usuario.find(query)
    //     .skip(parseInt(desde))
    //     .limit(Number(limite));

    // const total = await Usuario.countDocuments(query);


    // Esta forma que si ambos duraran 3 segundo el total de tiempo que demore seran 6 segundos
    const [usuarios, total] = await Promise.all([
        Usuario.find(query)
            .skip(parseInt(desde))
            .limit(Number(limite)),
        Usuario.countDocuments(query)
    ])

    res.json({
        msg: 'Get API-Controller',
        total,
        usuarios,
    })
}

const usuariosPost = async (req = request, res = response) => {

    // Obtener datos que se envia de front (Request) en = req.body
    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol })

    // ENCRIPTACION: genSaltSync --> Recibe como argumento un numero de capas de encriptacion.  
    const { genSaltSync, hashSync } = bcryptjs;
    usuario.password = hashSync(password, genSaltSync(5));

    // Grabar en la BD
    await usuario.save()

    res.json({
        msg: 'Post API-Controller --> usuario creado',
        usuario
    })
}

const usuariosPut = async (req, res) => {
    const { id } = req.params;

    // Para este punto al sacar password y google quiere decir que estos campos no se van a actualizar
    // por m??s que en el requiest lleguen nuevos valorse para los campos ya mencionados
    const { password, google, correo, ...resto } = req.body;

    // Validar contra la Base de Datos
    if (password) {
        const { genSaltSync, hashSync } = bcryptjs;
        resto.password = hashSync(password, genSaltSync())
    }

    // Le decimos que id va actualizar y tambien que campos debe actualizar ---> los que no se nombra no actualizar??
    const usuario = await Usuario.findByIdAndUpdate(id, resto);


    res.json({
        msg: 'Put API-Controller --> ACTUALIZADO',
        UsuarioActualizado: usuario
    })
}

const usuariosDelete = async (req, res) => {
    const { id } = req.params;
    // ELIMINA LOS USUARIOS DE FORMA FISICA --< EL CUAL NO ES RECOMENDADO
    // const usuario = await Usuario.findByIdAndDelete(id)

    // ACTUALIZA AL USAURIO SELECIONADO CON EL ESTADO FALSE EL CUAL AL EXTRAER TODOS
    // LOS USUARIOS ESTE NO VENDR?? YA QUE SOLO SE TRAEJ LOS USUARIOS CON ESTADO TRUE
    // ESTO SIRVE PARA NO PERDER LAS REFERECIAS QUE HISO ESTE USUARIO
    const query = { estado: false };
    const usuarioDeleted = await Usuario.findByIdAndUpdate(id, query);

    console.log("USUARIO_AUTH", req.userAuth)

    res.json({
        msg: 'Delete API-Controller --> User remove success ...!',
        delete: usuarioDeleted
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