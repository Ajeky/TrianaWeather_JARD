'use strict'

const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    lluvia : Number,
    velocidad_viento : Number,
    direccion_viento : Number,
    temperatura : Number,
    humedad : Number,
    calidad_aire : Number,
    presion : Number,
    estacion : {type :mongoose.Schema.Types.ObjectId , ref: 'Estaciones'},
    fecha : {type: Date, default: Date.now}
});

module.exports = mongoose.model('WeatherData', weatherDataSchema);