class Account {
    private readonly intRate: number;
    private bal: number;

    constructor(intRate: number = 8) {
        this.intRate = intRate;
        this.bal = 0;
    }

    deposit(amt: number = 0) {
        this.bal = this.bal + amt;
    }

    withdraw(amt: number = 0) {
        this.bal = this.bal - amt;
    }

    // getter
    get Balance(): number {
        return this.bal;
    }

    getBalance() {
        return this.bal;
    }
}

const a: Account = new Account(); // interest rate = 8

a.deposit(500); // now balance = 500

console.log(a.Balance);
console.log(a.getBalance());