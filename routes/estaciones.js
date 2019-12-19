const express = require('express')
const router = express.Router()
const EstacionController = require('../controllers/estaciones')
const WeatherDataController = require('../controllers/weatherdata')
const middleware = require('../middleware/middleware')

//router.get('/:id/weather/from/:from/to/:to', WeatherDataController.getDatosByIdEstacion);
router.post('/', middleware.ensureManager, EstacionController.nuevaEstacion);
router.get('/', middleware.ensureManager, EstacionController.getEstaciones);
router.get('/:id', middleware.ensureManager, EstacionController.getEstacion);
router.get('/:id/weather/from/:from/to/:to', WeatherDataController.getDatosByIdEstacionAndDateFromTo);
router.get('/:id/weather', WeatherDataController.getDatosByIdEstacion);
//router.post('/', EstacionController.nuevaEstacion);
router.get('/:id/summary/today', WeatherDataController.getSummaryByEstacion);

router.put('/:id', middleware.ensureManager, EstacionController.updateEstacion);
router.delete('/:id', middleware.ensureManager, EstacionController.deleteEstacion);

module.exports = router