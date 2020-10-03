const bcrypt = require('bcrypt');

class Bcrypt {
  async hash(password) {
    const hashed = await bcrypt.hash(password, 10);

    return hashed;
  }
}

module.exports = Bcrypt;
