const SignUpService = require('../service/SignUpService');

class UserController {
  async create(request, response) {
    const { name, email, password, password_confirm } = request.body;

    if (!name) {
      return response.json({ message: 'name is required' });
    }

    if (!email) {
      return response.json({ message: 'email is required' });
    }

    if (!password) {
      return response.json({ message: 'password is required' });
    }

    if (!password_confirm)
      return response.json({ message: 'password_confirm is required' });

    if (password !== password_confirm)
      return response.json({ message: 'password not match' });

    const user = await SignUpService.execute({ name, email, password });

    return response.json(user);
  }
}

module.exports = new UserController();
