const express = require('express')
const router = express.Router()
const EstacionController = require('../controllers/estaciones')
const WeatherDataController = require('../controllers/weatherdata')

//router.get('/:id/weather/from/:from/to/:to', WeatherDataController.getDatosByIdEstacion);
router.post('/', EstacionController.nuevaEstacion);
router.get('/', EstacionController.getEstaciones);
router.get('/:id', EstacionController.getEstacion);
router.get('/:id/weather/from/:from/to/:to', WeatherDataController.getDatosByIdEstacionAndDateFromTo);
router.get('/:id/weather', WeatherDataController.getDatosByIdEstacion);
//router.post('/', EstacionController.nuevaEstacion);
router.get('/:id/summary/today', WeatherDataController.getSummaryByEstacion);

module.exports = router