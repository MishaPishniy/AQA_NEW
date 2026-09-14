const apiClient = require('../api/apiClient');

describe('Тестування API', () => {
  test('Перший тест аксіосє ', async () => {
    const response = await apiClient.get('/users/1');

    expect(response.status).toBe(200);
  });

 
  });
