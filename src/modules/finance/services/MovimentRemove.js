class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, moviment_id) {
    // Serve para armazenar o id do user antes dele ser excluido
    const moviment_tmp = await this.financeRepository.movimentById(moviment_id);

    // Compara o id do user do movimento com o id da pessoa logada
    if (moviment_tmp.user_id !== user_id) {
      return { message: "you don't have permission to delete this moviment" };
    }

    const moviment = await this.financeRepository.movimentRemove(moviment_id);
    return moviment;
  }
}

module.exports = MovimentRemove;
