function showUser() {
  try {
    console.log(userName);
  } catch (error) {
    console.log("Виникла помилка");
    console.log(error.message);
  }
}

showUser();