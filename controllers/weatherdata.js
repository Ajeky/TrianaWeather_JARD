'use strict'

const _ = require('lodash');
const WeatherData = require('../models/weatherdata')

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
    }
}