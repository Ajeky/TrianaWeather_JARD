'use strict'

const _ = require('lodash');
const WeatherData = require('../models/weatherdata');
const Estaciones  = require ('../models/estaciones');
//const error_types = require('./error_types');

module.exports = {
    //Método que sirve para crear un WeatherData(datos meteorologicos)
    createWeatherData : (req,res) => {

        let weatherData = new WeatherData({
            lluvia : req.body.lluvia,
            velocidad_viento : req.body.velocidad_viento,
            direccion_viento : req.body.direccion_viento,
            temperarura : req.body.temperarura,
            humedad : req.body.humedad,
            calidad_aire : req.body.calidad_aire,
            presion : req.body.presion,
            estacion : req.body.estacion,
            fecha : req.body.fecha
        });

        weatherData.save()
            .then(wd => wd.populate('estacion').execPopulate())
            .then(wd => res.status(201).json(wd))
            .catch(err => res.send(500).json(err.message))
    },

    //Metodo para recoger TODOS los datos meteorologicos.
    getWeatherById: async (req, res) => {
        const weatherId = req.params.id;
        WeatherData.findById(weatherId)
        .populate('estacion')
        .exec()
        .then(doc => res.status(200).json(doc))
        .catch(err => res.send(404).json(err.message));
    },
    getDatosByIdEstacion: (req,res) => {
        const estacion_id = req.params.id;
        WeatherData.find({estacion : estacion_id})
            .populate('estacion')
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.send(404).json(err.message));
    },
    //Metodo para recoger todos los datos meteorologicos de una estacion por ID y entre dos fechas.
    getDatosByIdEstacionAndDateFromTo: async (req, res) => {

        const from = req.params.from.split('-');
        const to = req.params.to.split('-');
        var dateFrom = new Date (parseInt(from[2]),parseInt(from[1])-1,parseInt(from[0]));
        var dateTo = new Date (parseInt(to[2]),parseInt(to[1])-1,parseInt(to[0]));

        dateTo.setHours(23,59,59,999);

        WeatherData.find({estacion: req.params.id, fecha:{$gte:dateFrom, $lte:dateTo }})
        .populate('estacion')
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(err => res.send(404).json(err.message));

    },
/* getWeatherDataToday : (req,res) => {
    var start = new Date();
    start.setHours(0,0,0,0);

    var end = new Date();
    end.setHours(23,59,59,999);s

    WeatherData.find({fecha:{$gte: start, $lt: end}})
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(err => res.send(500).json(err.message))
} */
    //Método para obtener un WeatherData por su id
    getWeatherData : (req,res,next) => {
        const weatherData_id = req.params.id;
        WeatherData.findById(weatherData_id)
            .exec()
            .then(doc => doc.populate('estacion').execPopulate())
            .then(doc => res.status(200).json(doc))
            .catch(err => res.send(404).json(err.message));
    },
    //Método para traer todos los WeatherData de hoy
    getWeatherDataToday : (req,res) => {
        var start = new Date();
        start.setHours(0,0,0,0);

        var end = new Date();
        end.setHours(23,59,59,999);

        WeatherData.find({fecha:{$gte: start, $lt: end}})
        .populate('estacion')
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(err => res.send(500).json(err.message))
    },
    //Método para traer los WeatherData para un rango determinado de fechas(Formato : dd-MM-yyyy)
    getWeatherDataFromTo : (req,res) => {
        var from_split = req.params.from.split('-');
        var to_split = req.params.to.split('-');
        
        var from = new Date(parseInt(from_split[2]),parseInt(from_split[1])-1,parseInt(from_split[0]));
        var to = new Date(parseInt(to_split[2]),parseInt(to_split[1])-1,parseInt(to_split[0]));
        to.setHours(23,59,59,999);
        
        WeatherData.find({fecha:{$gte: from, $lte: to}}, {id: req.params.id})
        .populate('estacion')
        .exec()
        .then(docs => res.status(200).json(docs))
        .catch(err => res.send(500).json(err.message));
    },
    getSummaryByEstacion : (req,res) => {
        var listaWeatherData = [];

        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        
        const estacion_id = req.params.id;
        WeatherData.find({estacion : estacion_id , fecha:{$gte: start, $lt: end}})
            .populate('estacion')
            .exec()
            .then(docs => {
                var total = 0;
                _.forEach(docs,wd => {
                    total += wd.velocidad_viento;
                    
                });
                res.status(200).json({
                    total : total
                });
            })
            .catch(err => res.send(404).json(err.message));
    }

};
