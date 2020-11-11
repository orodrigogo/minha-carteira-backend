class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, moviment_id) {
    const moviment = await this.financeRepository.movimentRemove(moviment_id);

    if (moviment.user_id !== user_id) {
      return { message: "you don't have permission to delete this moviment" };
    }
    return moviment;
  }
}

module.exports = MovimentRemove;
