class MovimentRegister {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(data) {
    const { user_id, title, type, date, frequency, amount, description } = data;

    const moviment = await this.financeRepository.add({
      user_id,
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
