
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
------------------------------------------------------------------

const createFraction = (numerator, denominator) => {
  return {
    numerator,
    denominator
  };
};

// 🔹 ADDITION OF FRACTIONS
const addFractions = (f1, f2) => {
  const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator);
  const denominator = f1.denominator * f2.denominator;

  return createFraction(numerator, denominator);
};

// 🔹 SUBTRACTION OF FRACTIONS
const subtractFractions = (f1, f2) => {
  const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator);
  const denominator = f1.denominator * f2.denominator;

  return createFraction(numerator, denominator);
};

// 🔹 MULTIPLICATION OF FRACTIONS
const multiplyFractions = (f1, f2) => {
  const numerator = f1.numerator * f2.numerator;
  const denominator = f1.denominator * f2.denominator;

  return createFraction(numerator, denominator);
};

// 🔹 DIVISION OF FRACTIONS
const divideFractions = (f1, f2) => {
  const numerator = f1.numerator * f2.denominator;
  const denominator = f1.denominator * f2.numerator;

  return createFraction(numerator, denominator);
};

// 🔹 TESTS
const f1 = createFraction(3, 4);
const f2 = createFraction(2, 3);

console.log("Addition:", addFractions(f1, f2));
console.log("Subtraction:", subtractFractions(f1, f2));
console.log("Multiplication:", multiplyFractions(f1, f2));
console.log("Division:", divideFractions(f1, f2));

