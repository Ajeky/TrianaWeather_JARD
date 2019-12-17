'use strict'

const _ = require('lodash');
const WeatherData = require('../models/weatherdata');
const Estaciones  = require ('../models/estaciones');

module.exports = {

    nuevoWeatherData : (req,res) => {

        let weatherData = new WeatherData({
            lluvia : req.body.lluvia,
            velocidad_viento : req.body.velocidad_viento,
            direccion_viento : req.body.direccion_viento,
            temperarura : req.body.temperarura,
            humedad : req.body.humedad,
            calidad_aire : req.body.calidad_aire,
            presion : req.body.presion
        });

        weatherData.save()
            //populate estacion .then(wd => )
            .then(wd => res.status(201).json(wd))
            .catch(err => res.send(500).json(err.message))
    },

    getById: async (req, res) => {

        try {
            let result = null;

            if (WeatherData.find({_id: req.param.id}) != null && WeatherData.find({_id: req.param.id}) != undefined) {
                result = await WeatherData.find({_id: req.param.id}).exec();
                res.status(200).json(result);
            } else {
               res.send(404, 'El objeto que buscas no esta en la base de datos.');
            }
        } catch (error) {
            res.send(500, error.message);
        }
    },

    getDatosByIdEstacion: async (req, res) => {
      //  let estacion = Estaciones.find({_id: req.param.id});
        try{
            let result = null;
            result = await WeatherData.find({estacion_meteorologica: req.param.id}).exec();
          
        }catch (error) {

        }
        

    }


};
/* getWeatherDataToday : (req,res) => {
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999);

    WeatherData.find({fecha:{$gte: start, $lt: end}})
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(err => res.send(500).json(err.message))
} */