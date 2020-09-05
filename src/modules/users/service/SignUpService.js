const UsersRepository = require('../repositories/UsersRepository');

class SignUpService {
  async execute(data){
    const { name, email, password } = data;

    const user = await UsersRepository.add({ name, email, password});
    
   
    return user;

  }
}

module.exports = new SignUpService();