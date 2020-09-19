const UsersRepositoryFake = require('../repositories/UsersRepositoryFake');
const SignUpService = require('./SignUpService');

describe('SignUpService', () => {
  test('should be able to create a new user', async () => {
    const data = {
      name: 'any_user',
      email: 'any@email.com',
      password: 'any_password',
    };

    const usersRepositoryFake = new UsersRepositoryFake();
    const signUpService = new SignUpService(usersRepositoryFake);

    const user = await signUpService.execute(data);

    expect(user.ops[0]).toHaveProperty('_id');
  });
});
