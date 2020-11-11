class FinanceRepositoryFake {
  async add(data) {
    const dataFormatted = {
      id: 'any_id',
      ...data,
    };

    return dataFormatted;
  }
}

module.exports = FinanceRepositoryFake;
