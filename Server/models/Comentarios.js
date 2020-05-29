const Sequelize = require('sequelize');

const db = require('../config/database');

const Comentario = db.define('comentarios', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

module.exports = Comentario;
