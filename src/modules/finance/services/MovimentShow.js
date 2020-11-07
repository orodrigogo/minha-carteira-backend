class MovimentShow {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, moviment_id) {
    const moviment = await this.financeRepository.movimentById(moviment_id);

    if (moviment.user_id !== user_id)
      return { message: "you don't have permission to show this moviment" };

    return moviment;
  }
}

module.exports = MovimentShow;
