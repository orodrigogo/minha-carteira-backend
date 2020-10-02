class UsersRepositoryFake {
  async add(data) {
    const user = {
      id: 'any_id',
      ...data,
    };

    return user;
  }

  async findByEmail(email) {
    const user = email === 'exist@email.com' ? email : null;

    return user;
  }
}

module.exports = UsersRepositoryFake;
