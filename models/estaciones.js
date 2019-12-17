'use strict'

const mongoose = require('mongoose')

const estacionesSchema = new mongoose.Schema({

    latitud: {type:Number},
    longitud:{type:Number},
    nombre: {type:String},
    usuarioRegistra:{type: mongoose.Schema.Types.ObjectId,
                     ref: 'Usuario'},
    usuarioMantiene:{type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'}

});

module.exports = mongoose.model('Estaciones', estacionesSchema)