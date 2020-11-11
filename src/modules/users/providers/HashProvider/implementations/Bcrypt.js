const bcrypt = require('bcrypt');

class Bcrypt {
  async hash(password) {
    const hashed = await bcrypt.hash(password, 10);

    return hashed;
  }

  async compare(password, passwordHashed) {
    const passwordMatch = await bcrypt.compare(password, passwordHashed);

    return passwordMatch;
  }
}

module.exports = Bcrypt;
