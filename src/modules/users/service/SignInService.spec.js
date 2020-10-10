const UsersRepositoryFake = require('../repositories/UsersRepositoryFake');
const HashProvider = require('../providers/HashProvider/model/HashProviderModel');
const SignInService = require('./SignInService');

describe('SignInService', () => {
  test('should be able user login if email and password match', async () => {
    const data = {
      email: 'exist@email.com',
      password: 'any_password',
    };

    const usersRepositoryFake = new UsersRepositoryFake();
    const hashProvider = new HashProvider();
    const signInService = new SignInService(usersRepositoryFake, hashProvider);

    const user = await signInService.execute(data);

    expect(user).toHaveProperty('id');
  });

  test('should be erro message if email not exist', async () => {
    const data = {
      email: 'not_exist@email.com',
      password: 'any_password',
    };

    const usersRepositoryFake = new UsersRepositoryFake();
    const hashProvider = new HashProvider();
    const signInService = new SignInService(usersRepositoryFake, hashProvider);

    const user = await signInService.execute(data);

    expect(user).toHaveProperty('error');
  });
});
