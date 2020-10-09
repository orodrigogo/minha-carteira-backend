const { Router } = require('express');

const AuthController = require('../../../modules/users/controllers/AuthController');

const usersRoutes = Router();

usersRoutes.post('/', AuthController.create);

module.exports = usersRoutes;
