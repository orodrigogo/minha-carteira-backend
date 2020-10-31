const mongo = require('../../../infra/database/mongoose');

class FinanceRepository {
  async add(data) {
    const moviment = await mongo.collection('moviments').insertOne(data);

    const movimentFormatted = {
      id: moviment.ops[0]._id,
      ...moviment.ops[0],
    };

    delete movimentFormatted._id;

    return movimentFormatted;
  }
}

module.exports = FinanceRepository;
