'use strict'

const express = require('express');
const router = express.Router();
const WeatherDataController = require('../controllers/weatherdata');

router.post('/',WeatherDataController.createWeatherData)
router.get('/today',WeatherDataController.getWeatherDataToday)
//router.get('/:id',WeatherDataController.getWeatherData)
router.get('/from/:from/to/:to',WeatherDataController.getWeatherDataFromTo)

router.get('/:id', WeatherDataController.getWeatherById);
//router.get('/weatherdata/station/:id', WeatherDataController.getDatosByIdEstacion);
module.exports = router