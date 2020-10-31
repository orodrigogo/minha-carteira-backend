const MovimentRegister = require('../services/MovimentRegister');
const FinanceRepository = require('../repositories/FinanceRepository');

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
    const idMoviment = request.params.id;

    return response.json(idMoviment);
  }
}

module.exports = new MovimentController();
