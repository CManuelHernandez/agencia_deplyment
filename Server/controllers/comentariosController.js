const Comentario = require('../models/Comentarios');

exports.mostrarComentarios = async (req,res) => {
    const comentarios = await Comentario.findAll()
    res.render('comentarios',{
        pagina: 'Comentarios',
        comentarios : comentarios
    })
}

exports.agregarComentario = async (req,res) => {
    //Validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if (!nombre){
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    }
    if (!correo){
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }
    if (!mensaje){
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //Revisar por errores
    if(errores.length > 0 ){
        //muestra la vista con errores
        const comentarios =  await Comentario.findAll()
        res.render('comentarios', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Comentarios'
        })
    }else{
        //Almacena en la BD
        Comentario.create({
            nombre,
            correo,
            mensaje
        }).then(comentarios => res.redirect('/comentarios'))
        .catch(error => console.log(error));
    }
}