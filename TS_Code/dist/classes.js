"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    intRate;
    bal;
    //default property
    constructor(intRate = 8) {
        this.intRate = intRate;
        this.bal = 0;
    }
    deposit(mat = 0) {
        this.bal = this.bal + amt;
    }
    withdraw(amt = 0) {
        this.bal = this.bal - amt;
    }
    //getter (new feature)
    get Balance() {
        return this.bal;
    }
    //set
    //much better syntax
    getBalance() {
        return this.bal;
    }
}
const a = new Account(500);
//acount with initial balance of 500 Rs
console.log(a.Balance); //no need of ()
console.log(a.getBalance());
//you are hiding the variable named "bal"
//a.bal = 963852741; //this wrong
//concept of Object Oriented Programming
//Car -->field/propertues:weight, height,color,topspeed,
// module, etc,
//  --> Methods: Accerate (), start(),stop(),idiomatic        
//# sourceMappingURL=classes.js.map