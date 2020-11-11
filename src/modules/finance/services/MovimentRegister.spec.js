const MovimentRegister = require('./MovimentRegister');
const FinanceRepositoryFake = require('../repositories/FinanceRepositoryFake');

describe('MovimentRegister', () => {
  test('should be able register new finance moviment', async () => {
    const data = {
      title: 'Café',
      type: 'saída',
      date: '31/10/2020',
      frequency: 'Recorrente',
      amount: 8.6,
      description: 'Compra café urgente',
    };

    const repository = new FinanceRepositoryFake();
    const movimentRegister = new MovimentRegister(repository);
    const finance = await movimentRegister.execute(data);

    expect(finance).toHaveProperty('id');
  });
});
