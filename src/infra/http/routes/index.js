const { Router } = require('express');

const usersRouter = require('./users.routes');
const authRouter = require('./auth.routes');
const financeRouter = require('./finance.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use('/finance', financeRouter);

module.exports = routes;
