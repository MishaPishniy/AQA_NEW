function getUserName(user) {
  try {
    if (!user) {
      throw new Error("Користувача не передано");
    }

    return user.name;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const name = getUserName(null);
console.log(name);