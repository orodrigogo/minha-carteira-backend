const UsersRepositoryFake = require('../repositories/UsersRepositoryFake');
const HashProvider = require('../providers/HashProvider/model/HashProviderModel');
const SignUpService = require('./SignUpService');

describe('SignUpService', () => {
  test('should be able to create a new user', async () => {
    const data = {
      name: 'any_user',
      email: 'any@email.com',
      password: 'any_password',
    };

    const usersRepositoryFake = new UsersRepositoryFake();
    const hashProvider = new HashProvider();
    const signUpService = new SignUpService(usersRepositoryFake, hashProvider);

    const user = await signUpService.execute(data);

    expect(user).toHaveProperty('id');
  });

  test('should be error message if email already used', async () => {
    const data = {
      name: 'any_user',
      email: 'exist@email.com',
      password: 'any_password',
    };

    const usersRepositoryFake = new UsersRepositoryFake();
    const hashProvider = new HashProvider();
    const signUpService = new SignUpService(usersRepositoryFake, hashProvider);

    const user = await signUpService.execute(data);

    expect(user).toHaveProperty('error');
  });
});
