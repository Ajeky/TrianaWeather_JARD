'use strict'

const express = require('express');
const router = express.Router();
const WeatherDataController = require('../controllers/weatherdata');

router.post('/',WeatherDataController.nuevoWeatherData);
router.get('/weatherData/:id', WeatherDataController.getById());
router.get('/weatherData/station/:id', WeatherDataController.getDatosByIdEstacion());
module.exports = router