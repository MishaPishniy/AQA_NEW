const axios = require('axios');

describe('Тестування API метод POST', () =>{

test ('Перший тест аксіосє ', async ()=>{

const body = {
    firstName: 'Harry',
    lastName: 'Potter'
}


  const response = await axios.post(
    'https://dummyjson.com/users/add',
    body
  );


  console.log(response.data);
  expect(response.data).toHaveProperty('id');
  expect(response.data.firstName).toBe('Harry');
  expect(response.data.lastName).toBe(body.lastName);
  expect(response.status).toBe(201);
})

})

