class User {
    constructor(name,age) {
        this.name = name , 
        this.age = age
    }

    sayHello() {
        console.log(`Hello ${this.name} and ${this.age}`)
    }
}

const user1 = new User("Misha", 30)
const user2 = new User("Ira", 30)

user1.sayHello()
user2.sayHello()