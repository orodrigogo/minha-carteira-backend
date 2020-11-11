const { sign } = require('jsonwebtoken');

class JwtToken {
  async generate(userId) {
    const token = sign({}, process.env.KEY_SECRET_TOKEN, {
      subject: String(userId),
      expiresIn: process.env.EXPIRES_IN_TOKEN,
    });

    return token;
  }
}

module.exports = JwtToken;
