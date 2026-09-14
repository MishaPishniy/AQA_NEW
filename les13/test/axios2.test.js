const axios = require('axios');

describe('Тестування API', () =>{

test.skip ('Перший тест аксіосє ', async ()=>{
  const response = await axios.get(
    'https://dummyjson.com/users/1'
  );

  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
})

test.skip ('Другий тест аксіосє ', async ()=>{
  const response = await axios.get(
    'https://dummyjson.com/users/1'
  );

  console.log(response.status);
  console.log(response.data);

  expect(response.status).toBe(200);
  expect(response.data.id).toBe(1);
})

})
