'use strict'

const express = require('express')
const router = express.Router()
const WeatherDataController = require('../controllers/weatherdata')

router.post('/',WeatherDataController.nuevoWeatherData)

module.exports = router