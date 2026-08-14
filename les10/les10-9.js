class User {
  constructor(name , age) {
    this.name = name
    this.age = age 
  }

  get age() {
   return this._age
  }

  set age(newAge) {

   if(newAge < 0) {
    throw new Error(" Age < 0 ")
   }

   this._age = newAge
  }
}

const user = new User("Михайло" , 30);
console.log(user.age);
user.age = 35
console.log(user.age);
