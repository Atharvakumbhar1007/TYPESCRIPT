abstract class Account {
    constructor(private bal: number = 0) { }

    abstract Deposit(amt: number): void;
    abstract Withdraw(amt: number): void;

    printOpening(): void {
        console.log("Account opened with balance:", this.bal);
    }

    get Balance(): number {
        return this.bal;
    }

    protected set Balance(val: number) {
        this.bal = val;
    }
}

//incomplete class-sice class is incomplete - you cannot create ann object

class SavingAccount extends Account {
    Deposit(amt: number): void {

    }
    Withdraw(amt: number): void {

    }
}
