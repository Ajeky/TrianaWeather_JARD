'use strict'

const _ = require('lodash');
const estaciones = require('../models/estaciones')

module.exports = {

    nuevaEstacion: (req, res) => {
        console.log(req.user);

        let estacion = new estaciones({
            localizacion: req.body.localizacion,
            nombre: req.body.nombre,
            usuarioRegistra: req.user._id, //Esto es el usuario que esta logueado
            usuarioMantiene: req.body.usuarioMantiene
        });
        estacion.save()
            .then(resp => resp.populate('usuarioRegistra', ['email', 'username']).execPopulate())
            .then(resp => resp.populate('usuarioMantiene', ['email', 'username']).execPopulate())
            .then(resp => res.status(201).json(resp))
            .catch(err => res.send(500).json(err.message))
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

            estaciones.save.then(resp => resp.populate('usuarioRegistra', ['email', 'username']).execPopulate())
                .then(resp => resp.populate('usuarioMantiene', ['email', 'username']).execPopulate())
                .then(resp => res.status(200).json(resp))
                .catch(res.status(500).send(err.message));
        });
    },

    deleteEstacion: function(req, res) {
        estaciones.findById(req.params.id, function(err, estaciones) {
            estaciones.remove(function(err) {
                if (err) return res.status(500).send(err.message);
                res.status(204).send();
            })
        });
    }
}