"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    bal;
    constructor(bal = 0) {
        this.bal = bal;
    }
    printOpening() {
        console.log("Account opened with balance:", this.bal);
    }
    get Balance() {
        return this.bal;
    }
    set Balance(val) {
        this.bal = val;
    }
}
//incomplete class-sice class is incomplete - you cannot create ann object
class SavingAccount extends Account {
    Deposit(amt) {
    }
    Withdraw(amt) {
    }
}
//# sourceMappingURL=abstract.js.map