const mongoose = require('mongoose');
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

  async movimentsByUser(id, type, frequency) {
    const moviments = await mongo
      .collection('moviments')
      .find({
        user_id: { $eq: id },
        type: { $eq: type },
        frequency: { $eq: frequency },
      })
      .toArray();

    return moviments;
  }

  async movimentById(id) {
    const moviment = await mongo
      .collection('moviments')
      .findOne({ _id: mongoose.Types.ObjectId(id) });

    return moviment;
  }

  async movimentRemove(id) {
    await mongo
      .collection('moviments')
      .deleteOne({ _id: mongoose.Types.ObjectId(id) });
  }
}

module.exports = FinanceRepository;
