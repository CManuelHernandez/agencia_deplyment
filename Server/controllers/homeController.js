const Viaje = require('../models/Viajes');
const Comentario = require('../models/Comentarios');

exports.consultasHomepage = async (req,res) => {
    const promises = [];

    const viajes = await Viaje.findAll({limit: 3});

    const comentarios = await Comentario.findAll({limit: 3});

    res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes: viajes,
        comentarios: comentarios
     })
}