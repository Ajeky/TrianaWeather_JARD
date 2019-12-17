'use strict'

const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const error_types = require('./error_types');
const User = require('../models/users');

let controller = {

    register: (req, res, next) => {
        User.find({ username: req.body.username }, (err, result) => {
            if (result.length > 0) next(new error_types.Error400("El usuario ya existe"));
            else {
                let pass = bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS));
                let user = new User({
                    username: req.body.username,
                    email: req.body.email,
                    nombre_completo: req.body.nombre_completo,
                    rol: req.body.rol,
                    fecha_creacion: new Date(),
                    password: pass,
                    estaciones_registradas: [],
                    estaciones_mantenidas: []
                });

                user.save((err, user) => {
                    if (err) next(new error_types.Error400(err.message));
                    res.status(201).json(user);
                });
            }
        });
    },

    login: (req, res, next) => {
        passport.authenticate("local", { session: false }, (error, user) => {
            
            if (error || !user) next(new error_types.Error404("El usuario o la contraseña son incorrectos"))
            else {
                const payload = {
                    sub: user.id,
                    exp: Date.now + parseInt(process.env.JWT_LIFETIME),
                    username: user.username
                };
                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, { algorithm: process.env.JWT_ALGORITHM });
                res.json({
                    username: user.username,
                    token: token
                });
            }
        })(req, res)
    }
}

module.exports = controller;