'use strict'

const express = require('express')
const router = express.Router()
const WeatherDataController = require('../controllers/weatherdata')

router.post('/',WeatherDataController.createWeatherData)
router.get('/today',WeatherDataController.getWeatherDataToday)
router.get('/:id',WeatherDataController.getWeatherData)
router.get('/from/:from/to/:to',WeatherDataController.getWeatherDataFromTo)

module.exports = router