const { Router } = require('express');
const movimentController = require('../../../modules/finance/controllers/movimentController');
const authenticated = require('../middlewares/authenticated');

const financeRouter = Router();

financeRouter.post('/moviment', authenticated, movimentController.create);
financeRouter.delete('/moviment/:id', authenticated, movimentController.delete);
financeRouter.get('/moviment', authenticated, movimentController.index);

module.exports = financeRouter;
