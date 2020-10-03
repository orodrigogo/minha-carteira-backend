class SignUpService {
  constructor(usersRepository, cryptProvider) {
    this.usersRepository = usersRepository;
    this.cryptProvider = cryptProvider;
  }

  async execute(data) {
    const { name, email, password } = data;

    const emailAlreadyUsed = await this.usersRepository.findByEmail(email);

    if (emailAlreadyUsed)
      return { error: 'Email not avaiable. Choise another!' };

    const passwordeHashed = await this.cryptProvider.hash(password, 10);

    const user = await this.usersRepository.add({
      name,
      email,
      password: passwordeHashed,
    });

    return user;
  }
}

module.exports = SignUpService;
