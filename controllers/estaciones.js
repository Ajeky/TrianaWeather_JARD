'use strict'

const _ = require('lodash');
const estaciones = require('../models/estaciones')
const User = require('../models/users');
const usuariosController = require('./user')

module.exports = {

    nuevaEstacion: async (req, res) => {

        let estacion = new estaciones({
            localizacion: req.body.localizacion,
            nombre: req.body.nombre,
            usuarioRegistra: req.user._id, //Esto es el usuario que esta logueado
            usuarioMantiene: req.body.usuarioMantiene
        });
        
        var id_estacion;
        var id_usuario_mantiene;
        await estacion.save()
            .then(resp => {
                id_estacion = resp._id;
                id_usuario_mantiene = resp.usuarioMantiene;
                return resp.populate('usuarioRegistra', ['email', 'username']).execPopulate()
            })
            .then(resp => resp.populate('usuarioMantiene', ['email', 'username']).execPopulate())
            .then(resp => res.status(201).json(resp))
            .catch(err => res.send(500).json(err.message))

        await User.findByIdAndUpdate(id_usuario_mantiene, {$push: {estaciones_mantenidas: id_estacion}});
        await User.findByIdAndUpdate(req.user._id, {$push: {estaciones_registradas: id_estacion}});

    },
    getEstaciones: async(req, res) => {

        try {
            let resultado = null

            resultado = await estaciones.find()
                .populate('usuarioRegistra', ['email', 'username'])
                .populate('usuarioMantiene', ['email', 'username'])
                .exec();

            res.status(200).json(resultado);

        } catch (err) {
            res.send(500, err.message);
        }

    },
    getEstacion: async(req, res) => {

        try {
            let resultado = null

            resultado = await estaciones.findById(req.params.id)
                .exec()
                .then(resp => resp.populate('usuarioRegistra', ['email', 'username']).execPopulate())
                .then(resp => resp.populate('usuarioMantiene', ['email', 'username']).execPopulate());

            res.status(200).json(resultado);

        } catch (err) {
            res.send(500, err.message);
        }
    },

    updateEstacion: function(req, res) {
        estaciones.findById(req.params.id, function(err, estaciones) {
            estaciones.localizacion = req.body.localizacion;
            estaciones.nombre = req.body.nombre;
            estaciones.usuarioMantiene = req.body.usuarioMantiene;

            try {
                estaciones.save()
                    .then(resp => resp.populate('usuarioRegistra', ['email', 'username']).execPopulate())
                    .then(resp => resp.populate('usuarioMantiene', ['email', 'username']).execPopulate())
                    .then(resp => res.status(200).json(resp));
            } catch (err) {
                res.send(500).json(err.message)
            }
        });
    },

    deleteEstacion: function(req, res) {
        estaciones.findByIdAndDelete(req.params.id, function(err, estaciones) {
            if (err) return res.status(500).send(err.message);
            res.send(204);
        });
    }
}