const express = require('express')
const router = express.Router()
const EstacionController = require('../controllers/estaciones')


router.post('/api/stations',EstacionController.nuevaEstacion);
router.get('/api/stations', EstacionController.getEstaciones);
router.get('/api/stations/id',EstacionController.getEstacion);
router.put('/api/stations/id', EstacionController.updateEstacion);
router.delete('/api/stations/id', EstacionController.deleteEstacion);

module.exports = router