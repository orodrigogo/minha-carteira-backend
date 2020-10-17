class EntryController {
  async create(request, response) {
    return response.send('teste!');
  }
}

module.exports = new EntryController();
