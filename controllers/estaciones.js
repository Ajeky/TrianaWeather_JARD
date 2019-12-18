'use strict'

const _ = require('lodash');
const Estaciones = require('../models/estaciones')

module.exports = {

    nuevaEstacion : (req,res) => {

        let estaciones = new Estaciones({
            localizacion: req.body.localizacion,
            nombre: req.body.nombre,
            usuarioRegistra: req.usuario._id,//Esto es el usuario que esta logueado
            usuarioMantiene: req.body.usuarioMantiene
        });
        estaciones.save()
            .then(resp => resp.populate('usuarioRegistra').execPopulate())
            .then(resp => resp.populate('usuarioMantiene').execPopulate())
            .then(resp => res.status(201).json(resp))
            .catch(err => res.send(500).json(err.message))
    },
    getEstaciones: async(req,res) =>{

        try{
            let resultado = null

            resultado = await estaciones.find().exec();

            res.status(200).json(resultado);

        }catch{
            res.send(500, err.message);
        }

    },
    getEstacion: async(req,res) => {

        try{
            let resultado = null

            resultado = await estaciones.findById(req.param.id).exec();

            res.status(200).json(resultado);

        }catch{
            res.send(500, err.message);
        }
    },
    
    updateEstacion = function(req, res) {
        estaciones.findById(req.params.id, function(err, estaciones) {
            estaciones.localizacion   = req.body.localizacion;
            tvshow.nombre    = req.body.nombre;
            tvshow.usuarioMantiene = req.body.usuarioMantiene;

            estaciones.save(function(err) {
                if(err) return res.status(500).send(err.message);
          res.status(200).jsonp(estaciones);
            });
        });
    },

    deleteEstacion = function(req, res) {
        estaciones.findById(req.params.id, function(err, estaciones) {
            estaciones.remove(function(err) {
                if(err) return res.status(500).send(err.message);
          res.status(200).send();
            })
        });
    }
}