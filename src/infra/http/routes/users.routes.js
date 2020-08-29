const { Router } = require('express');

const UserController = require('../../../modules/users/controllers/UserController');

const usersRoutes = Router();

usersRoutes.get('/create', UserController.create);

module.exports = usersRoutes;
