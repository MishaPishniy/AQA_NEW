import axios from 'axios';

async function getUser() {
  const response = await axios.get(
    'https://dummyjson.com/users/1'
  );

  console.log(response.status);
  console.log(response.data);
}

getUser();