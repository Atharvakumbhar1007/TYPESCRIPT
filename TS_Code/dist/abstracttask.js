"use strict";
// Create an abstract class Payment with an abstract method 
// processPayment(amount: number) and a concrete method
// printReceipt(). Then create two classes CreditCard and Cash 
// that extend Payment and implement their own payment
// processing logic.
//Also - no emply methods in concrete they must work (do something)
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    bal;
    constructor(bal = 0) {
        this.bal = bal;
    }
    printReceipt() {
        console.log("Amount Paid: ", this.bal);
    }
}
class CreditCard extends Payment {
    processPayment(amount) {
        if (amount <= 0) {
            console.log("Invalid payment amount");
            return;
        }
    }
}
class Cash extends Payment {
    processPayment(amount) {
        if (amount <= 0) {
            console.log("Invalid Cash Payment");
            return;
        }
    }
}
//# sourceMappingURL=abstracttask.js.map