const mongo = require('../../../infra/database/mongoose');

class UsersRepository {
  async add(data) {
    const user = await mongo
      .collection('users')
      .insertOne(data)
      .then(result => {
        return result;
      });

    const userFormatted = {
      // eslint-disable-next-line
      id: user.ops[0]._id,
      ...user.ops[0],
    };

    delete userFormatted.password;
    // eslint-disable-next-line
    delete userFormatted._id;

    return userFormatted;
  }

  async findByEmail(email) {
    const user = await mongo
      .collection('users')
      .findOne({ email })
      .then(result => {
        return result;
      });

    return user;
  }
}

module.exports = UsersRepository;
