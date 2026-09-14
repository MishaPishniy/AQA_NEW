const axios = require('axios');

describe.skip('Тестування API', () => {
  test('Перший тест аксіосє ', async () => {
    const response = await axios.get('https://dummyjson.com/users/1');

    expect(response.status).toBe(200);
  });

  test.skip('Другий тест аксіосє ', async () => {
    const response = await axios.get('https://dummyjson.com/users/1');

    expect(response.data.firstName).toBe('Terry');
  });

  test.skip('Третій тест аксіосє ', async () => {
    const response = await axios.get('https://dummyjson.com/users/1');

    expect(response.data.id).toBe(1);
  });
});
