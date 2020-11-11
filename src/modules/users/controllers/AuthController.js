const SignInService = require('../service/SignInService');
const UsersRepository = require('../repositories/UsersRepository');
const BcryptProvider = require('../providers/HashProvider/implementations/Bcrypt');
const JwtToken = require('../providers/TokenProvider/implementations/JwtToken');

class AuthController {
  async create(request, response) {
    const { email, password } = request.body;

    if (!email) return response.json({ message: 'email is required' });
    if (!password) return response.json({ message: 'password is required' });

    const usersRepository = new UsersRepository();
    const bcryptProvider = new BcryptProvider();
    const jwtToken = new JwtToken();

    const signInService = new SignInService(
      usersRepository,
      bcryptProvider,
      jwtToken,
    );

    const user = await signInService.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

module.exports = new AuthController();
