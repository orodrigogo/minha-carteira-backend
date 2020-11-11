const MovimentRegister = require('../services/MovimentRegister');
const FinanceRepository = require('../repositories/FinanceRepository');
const MovimentListByUser = require('../services/MovimentListByUser');
const MovimentShow = require('../services/MovimentShow');
const MovimentRemove = require('../services/MovimentRemove');

class MovimentController {
  async create(request, response) {
    const { title, type, date, frequency, amount, description } = request.body;

    if (!title) return response.json({ error: 'title is missing' });
    if (!type) return response.json({ error: 'type is missing' });
    if (!date) return response.json({ error: 'date is missing' });
    if (!frequency) return response.json({ error: 'frequency is missing' });
    if (!amount) return response.json({ error: 'amount is missing' });
    if (!description) return response.json({ error: 'description is missing' });

    const repository = new FinanceRepository();
    const movimentRegister = new MovimentRegister(repository);
    const finance = await movimentRegister.execute({
      ...request.body,
      user_id: request.user.id.sub,
    });

    return response.json(finance);
  }

  async delete(request, response) {
    const repository = new FinanceRepository();
    const movimentRemove = new MovimentRemove(repository);
    const user_id = request.user.id.sub;
    const moviment_id = request.params.id;

    const finance = await movimentRemove.execute(user_id, moviment_id);

    // A sua atividade é finalizar essa funcionalidade.
    return response.json(finance);
  }

  async index(request, response) {
    const repository = new FinanceRepository();
    const movimentListByUser = new MovimentListByUser(repository);

    const user_id = request.user.id.sub;
    const { type, frequency } = request.query;

    const finance = await movimentListByUser.execute(user_id, type, frequency);

    response.json(finance);
  }

  async show(request, response) {
    const repository = new FinanceRepository();
    const movimentShow = new MovimentShow(repository);

    const user_id = request.user.id.sub;
    const moviment_id = request.params.id;

    const finance = await movimentShow.execute(user_id, moviment_id);

    response.json(finance);
  }
}

module.exports = new MovimentController();
