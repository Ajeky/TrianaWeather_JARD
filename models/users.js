'use strict'

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    nombre_completo: String,
    rol: { type: String, enum: ["USER", "MANAGER", "ADMIN"], default: "USER" },
    fecha_creacion: { type: Date, default: Date.now },
    password: String,
    estaciones_registradas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estaciones' }],
    estaciones_mantenidas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estaciones' }]
});

module.exports = mongoose.model('User', userSchema);