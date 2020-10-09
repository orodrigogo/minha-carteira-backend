const { Router } = require('express');

const usersRouter = require('./users.routes');
const authRouter = require('./auth.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);

module.exports = routes;
