class JwtTokenModel {
  async generate(userId) {
    return `Baren token-${userId}`;
  }
}

module.exports = JwtTokenModel;
