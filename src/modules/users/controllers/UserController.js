class UserController{
  async create(request, response){

    return response.send('Controller do Usuário foi chamada!');

  }
}

module.exports = new UserController();