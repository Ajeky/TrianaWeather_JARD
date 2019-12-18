const express = require('express')
const router = express.Router()
const EstacionController = require('../controllers/estaciones')


router.post('',EstacionController.nuevaEstacion);

module.exports = router