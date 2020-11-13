class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(movimentId, userId) {
    const moviment = await this.financeRepository.movimentById(movimentId);

    if (!moviment) return { error: 'this moviment not exits!' };

    if (moviment.user_id !== userId)
      return { message: "you don't have permission to show this moviment" };

    await this.financeRepository.movimentRemove(movimentId);

    return null;
  }
}

module.exports = MovimentRemove;
