function deposit(amount){
        this.balance = this.balance + amount
    }
function showBalance(){
        console.log(this.balance)
    }

const user = {
    name: "Alice",
    age:28,
    balance: 1000,
    deposit: deposit,
    showBalance: showBalance
}

user.deposit(500)
user.showBalance()

const user2 = {
    name: "Bob",
    age: 30,
    balance: 1500,
    deposit: deposit,
    showBalance: showBalance
}

user2.deposit(300)
user2.showBalance()