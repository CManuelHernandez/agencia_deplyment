const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req,res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes: viajes
     });
}

exports.mostrarViaje = async (req,res) => {
    //res.send(req.params.id) Forma de comprobar el id de la pagina
    const viaje = await Viaje.findByPk(req.params.id)
        res.render('viaje', {
            viaje
        })
}