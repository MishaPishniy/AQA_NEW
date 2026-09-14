const apiClient = require('../api/apiClient');

describe('Тестування API', () => {
  test('Перший тест аксіосє ', async (credentials) => {
    const response = await apiClient.post('/auth/login');

    expect(response.status).toBe(200);
  });

 
  });
