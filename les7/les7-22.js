function getUserName(user) {
  if (!user) {
    throw new Error("Користувача не передано");
  }

  return user.name;
}

try {
  const name = getUserName(null);
  console.log(name);
} catch (error) {
  console.log(error.message);
}