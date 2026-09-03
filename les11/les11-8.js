async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Михайло",

        email: "mykhailo@example.com",
      }),
    });

    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}

getUser();
