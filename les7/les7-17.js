function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Баланс: ${balance}`);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Недостатньо коштів");
        return;
      }

      balance -= amount;
      console.log(`Баланс: ${balance}`);
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());

console.log(account.balance);