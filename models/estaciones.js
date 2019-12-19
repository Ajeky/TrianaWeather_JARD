'use strict'

const mongoose = require('mongoose')

const estacionesSchema = new mongoose.Schema({
    
    localizacion:{type:String},
    nombre: {type:String},
    usuarioRegistra:{type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'},
    usuarioMantiene:{type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'}

});

module.exports = mongoose.model('Estaciones', estacionesSchema)