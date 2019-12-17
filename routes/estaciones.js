const express = require('express')
const router = express.Router()
const EstacionController = require('../controllers/estaciones')


router.post('/api/stations',EstacionController.nuevaEstacion);