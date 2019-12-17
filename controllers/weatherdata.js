'use strict'

const _ = require('lodash');
//const error_types = require('./error_types');
const WeatherData = require('../models/weatherdata')

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
            fecha : req.body.fecha
        });

        weatherData.save()
            //populate estacion .then(wd => )
            .then(wd => res.status(201).json(wd))
            .catch(err => res.send(500).json(err.message))
    },
    //Método para obtener un WeatherData por su id
    getWeatherData : (req,res,next) => {
        const weatherData_id = req.params.id
        WeatherData.findById(weatherData_id)
            .exec()
            .then(doc => res.status(200).json(doc))
            .catch(err => res.send(404).json(err.message))
    },
    //Método para traer todos los WeatherData de hoy
    getWeatherDataToday : (req,res) => {
        var start = new Date();
        start.setHours(0,0,0,0);

        var end = new Date();
        end.setHours(23,59,59,999);

        WeatherData.find({fecha:{$gte: start, $lt: end}})
            .exec()
            .then(docs => res.status(200).json(docs))
            .catch(err => res.send(500).json(err.message))
    },
    //Método para traer los WeatherData para un rango determinado de fechas
    getWeatherDataFromTo : (req,res) => {
        console.log('fromto');
        console.log(req.params.from);
        console.log('to');
        console.log(req.params.to);
    }

}