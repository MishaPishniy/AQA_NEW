const config = require('../config');

test('помилка авторизації з неправильним паролем', async () => {
  expect.assertions(2);

  const wrongCredentials = {
    username: config.credentials.username,
    password: 'incorrect-password'
  };

  try {
    await authService.login(wrongCredentials);
  } catch (error) {
    expect(error.response.status).toBe(400);
    expect(error.response.data).toBeDefined();
  }
});