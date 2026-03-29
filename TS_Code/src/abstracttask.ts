// Create an abstract class Payment with an abstract method 
// processPayment(amount: number) and a concrete method
// printReceipt(). Then create two classes CreditCard and Cash 
// that extend Payment and implement their own payment
// processing logic.
//Also - no emply methods in concrete they must work (do something)

abstract class Payment {
    constructor(protected bal: number = 0) { }

    abstract processPayment(amount: number): void;

    printReceipt(): void {
        console.log("Amount Paid:", this.bal);
    }
}

// Credit Card Payment
class CreditCard extends Payment {
    processPayment(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid Credit Card Payment");
            return;
        }

        this.bal += amount;
        console.log("Processing Credit Card Payment of", amount);
    }
}

// Cash Payment
class Cash extends Payment {
    processPayment(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid Cash Payment");
            return;
        }

        this.bal += amount;
        console.log("Processing Cash Payment of", amount);
    }
}

// Usage
const cc = new CreditCard();
cc.processPayment(500);
cc.printReceipt();

const cash = new Cash();
cash.processPayment(300);
cash.printReceipt();