"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    intRate;
    bal;
    constructor(intRate = 8) {
        this.intRate = intRate;
        this.bal = 0;
    }
    deposit(amt = 0) {
        this.bal = this.bal + amt;
    }
    withdraw(amt = 0) {
        this.bal = this.bal - amt;
    }
    // getter
    get Balance() {
        return this.bal;
    }
    getBalance() {
        return this.bal;
    }
}
const a = new Account(); // interest rate = 8
a.deposit(500); // now balance = 500
console.log(a.Balance);
console.log(a.getBalance());
//# sourceMappingURL=classes.js.map