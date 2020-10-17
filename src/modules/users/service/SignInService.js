// const { sign } = require('jsonwebtoken');

class SignInService {
  constructor(usersRepository, cryptProvider) {
    this.usersRepository = usersRepository;
    this.cryptProvider = cryptProvider;
  }

  async execute(data) {
    const { email, password } = data;

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return { error: 'User not found' };
    }

    const passwordMatch = await this.cryptProvider.compare(
      password,
      user.password,
    );

    if (!passwordMatch) {
      return { error: "password doesn't match" };
    }

    // Vamos Gerar o Token de autenticação aqui!

    delete user.password;

    return user;
  }
}

module.exports = SignInService;
