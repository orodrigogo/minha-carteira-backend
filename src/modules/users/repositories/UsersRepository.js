const mongo = require('../../../infra/database/mongoose');

class UsersRepository {
  async add(data) {
    const user = await mongo.collection('users').insertOne(data);

    const userFormatted = {
      id: user.ops[0]._id,
      ...user.ops[0],
    };

    delete userFormatted.password;
    delete userFormatted._id;

    return userFormatted;
  }

  async findByEmail(email) {
    const user = await mongo.collection('users').findOne({ email });

    if (!user) return undefined;

    const userFormatted = {
      id: user._id,
      ...user,
    };

    delete userFormatted._id;
    return userFormatted;
  }
}

module.exports = UsersRepository;
