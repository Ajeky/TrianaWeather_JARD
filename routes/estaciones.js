const express = require('express')
const router = express.Router()
const EstacionController = require('../controllers/estaciones')
const WeatherDataController = require('../controllers/weatherdata')

router.get('/:id/weather/from/:from/to/:to', WeatherDataController.getDatosByIdEstacion);
router.post('', EstacionController.nuevaEstacion);

router.post('/api/stations', EstacionController.nuevaEstacion);
router.get('/api/stations', EstacionController.getEstaciones);
router.get('api/stations/id', EstacionController.getEstacion);

module.exports = router