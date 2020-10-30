class MovimentRegister {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(data) {
    const { title, type, date, frequency, amount, description } = data;

    const moviment = await this.financeRepository.add({
      title,
      type,
      date,
      frequency,
      amount,
      description,
    });

    return moviment;
  }
}

module.exports = MovimentRegister;
