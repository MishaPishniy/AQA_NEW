async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`);
    }

    const user = await response.json();
    //console.log(response.status);
    //console.log(response.ok);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

getUser();
