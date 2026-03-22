// Create an abstract class Payment with an abstract method 
// processPayment(amount: number) and a concrete method
// printReceipt(). Then create two classes CreditCard and Cash 
// that extend Payment and implement their own payment
// processing logic.
//Also - no emply methods in concrete they must work (do something)

abstract class Payment {
    constructor(private bal: number = 0) {

    }
    abstract processPayment(amount: number): void;

    printReceipt(): void {
        console.log("Amount Paid: ", this.bal);
    }

}
class CreditCard extends Payment {
    processPayment(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid payment amount");
            return;
        }
    }
class Cash extends Payment {
    processPayment(amount: number): void {
        if (amount <= 0) {
            console.log("Invalid Cash Payment");
            return;
        }
    }
}

}
