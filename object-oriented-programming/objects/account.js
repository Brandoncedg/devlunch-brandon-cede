
function Account(id, name, balance = 0) {
  this.id = id;
  this.name = name;
  this.balance = balance;

  this.deposit = (amount) => {
      this.balance += amount;
      return this;
  }

  this.withdraw = (amount) => {
      if (this.balance >= amount) {
          this.balance -= amount;
          return amount;
      }
      return null;
  }

  this.transfer = (toAccount, amount) => {
      const cash = this.withdraw(amount);
      if (cash) {
          toAccount.deposit(cash);
          return toAccount;
      }
      return null;
  }

  return this;
}

// Ejemplos de uso:
const account1 = new Account(1, "Cuenta 1", 1000);
const account2 = new Account(2, "Cuenta 2", 500);

console.log(account1);
console.log(account1.transfer(account2, 400));
console.log(account1);
