const SignUpService = require('../service/SignUpService');
const UsersRepository = require('../repositories/UsersRepository');
const BcryptProvider = require('../providers/HashProvider/implementations/Bcrypt');

class UserController {
  async create(request, response) {
    const { name, email, password, password_confirm } = request.body;

    if (!name) return response.json({ message: 'name is required' });

    if (!email) return response.json({ message: 'email is required' });

    if (!password) return response.json({ message: 'password is required' });

    if (!password_confirm)
      return response.json({ message: 'password_confirm is required' });

    if (password !== password_confirm)
      return response.json({ message: 'password not match' });

    const usersRepository = new UsersRepository();
    const bcryptProvider = new BcryptProvider();
    const signUpService = new SignUpService(usersRepository, bcryptProvider);

    const user = await signUpService.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

module.exports = new UserController();
