class BankAcaunt  {
    #balance

    constructor(owner, balance){

        this.owner = owner,
        this.#balance = balance
    }

    showBalance() {
        console.log(`balance ${this.#balance}`)
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("amount <= 0")
        }
        this.#balance += amount
    }

}

const user = new BankAcaunt('Misha',1000)
user.showBalance()
user.deposit(500)
user.showBalance()

