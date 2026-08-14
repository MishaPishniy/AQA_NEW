class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
   return this._name
  }

  set UserName(newName) {
    this._name = newName;
  }
}

const user = new User("Михайло");
console.log(user.name);
user.UserName = "Alex";
console.log(user.name);
