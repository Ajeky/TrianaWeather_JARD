'use strict'

const _ = require('lodash');
const estaciones = require('../models/estaciones')

module.exports = {

    nuevaEstacion : (req,res) => {

        let estaciones = new estaciones({
            localizacion: req.body.localizacion,
            nombre: req.body.nombre,
            usuarioRegistra: req.usuario._id,//Esto es el usuario que esta logueado
            usuarioMantiene: req.body.idMantenimiento
        });
        estaciones.save()
            .then(resp => resp.populate('usuarioRegistra').execPopulate())
            .then(resp => resp.populate('usuarioMantiene').execPopulate())
            .then(resp => res.status(201).json(resp))
            .catch(err => res.send(500).json(err.message))
    }
}