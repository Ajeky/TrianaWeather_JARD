'use strict'

const passport = require('passport');
const error_types = require('../controllers/error_types');
const _ = require('lodash');

let middlewares = {

    ensureAuthenticated: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (info) { return next(new error_types.Error401(info.message)); }

            if (err) { return next(err); }

            if (!user) { return next(new error_types.Error403("You are not allowed to access.")); }

            req.user = user;
            next();
        })(req, res, next);
    },
    ensureManager: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (info) { return next(new error_types.Error401(info.message)); }

            if (err) { return next(err); }

            if (user.rol != "ADMIN" && user.rol != "MANAGER") { return next(new error_types.Error403("You are not allowed to access.")); }

            req.user = user;
            next();
        })(req, res, next);
    },
    ensureAdmin: (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (info) { return next(new error_types.Error401(info.message)); }

            if (err) { return next(err); }

            if (user.rol != "ADMIN") { return next(new error_types.Error403("You are not allowed to access.")); }

            req.user = user;
            next();
        })(req, res, next);
    }
}