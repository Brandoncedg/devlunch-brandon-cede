
class Account {
    id: number;
    name: string;
    balance: number;

    constructor(id: number, name: string, balance: number = 0) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount: number): this {
        this.balance += amount;
        return this;
    }

    withdraw(amount: number): number | null {
        if (this.balance >= amount) {
            this.balance -= amount;
            return amount;
        }
        return null;
    }

    transfer(toAccount: Account, amount: number): Account | null {
        const cash = this.withdraw(amount);
        if (cash !== null) {
            toAccount.deposit(cash);
            return toAccount;
        }
        return null;
    }
}

// 🔹 Ejemplos de uso:
const account1 = new Account(1, "Cuenta 1", 1000);
const account2 = new Account(2, "Cuenta 2", 500);

console.log(account1);
console.log(account1.transfer(account2, 400));
console.log(account1);
