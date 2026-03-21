class Account {
    private readonly intRate: number;
    private bal: number;
    //default property
    constructor(intRate: number = 8) {
        this.intRate = intRate;
        this.bal = 0;
    }

    deposit(mat: number = 0) {
        this.bal = this.bal + amt;
    }
    withdraw(amt: number = 0) {
        this.bal = this.bal - amt;
    }

    //getter (new feature)
    get Balance(): number {
        return this.bal;
    }
    //set
    //much better syntax
    getBalance() {
        return this.bal;
    }
}

const a: Account = new Account(500);
//acount with initial balance of 500 Rs
console.log(a.Balance); //no need of ()
console.log(a.getBalance());
//you are hiding the variable named "bal"
//a.bal = 963852741; //this wrong
//concept of Object Oriented Programming
//Car -->field/propertues:weight, height,color,topspeed,
// module, etc,
//  --> Methods: Accerate (), start(),stop(),idiomatic        