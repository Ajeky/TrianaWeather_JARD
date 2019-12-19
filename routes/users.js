const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user');
const middleware = require('../middleware/middleware')

router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.get('/', middleware.ensureAdmin, UserController.getUsers)

module.exports = router