'use strict'

const express = require('express');
const router = express.Router();
const WeatherDataController = require('../controllers/weatherdata');
const middleware = require('../middleware/middleware')

router.post('/', middleware.ensureManager, WeatherDataController.createWeatherData)
router.get('/today',WeatherDataController.getWeatherDataToday)
//router.get('/:id',WeatherDataController.getWeatherData)
router.get('/from/:from/to/:to',WeatherDataController.getWeatherDataFromTo)

router.get('/:id', middleware.ensureAuthenticated, WeatherDataController.getById);
router.get('/weatherData/station/:id', WeatherDataController.getDatosByIdEstacion);
module.exports = router