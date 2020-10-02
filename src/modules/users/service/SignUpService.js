class SignUpService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data) {
    const { name, email, password } = data;

    const emailAlreadyUsed = await this.usersRepository.findByEmail(email);

    if (emailAlreadyUsed)
      return { error: 'Email not avaiable. Choise another!' };

    const user = await this.usersRepository.add({ name, email, password });

    return user;
  }
}

module.exports = SignUpService;
