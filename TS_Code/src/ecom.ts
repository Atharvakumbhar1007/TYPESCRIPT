type ID = string | number;
interface IProduct {
    id: ID;
    name: string;
    price: number;
}
//use implements for interfaces,
//extends for inheritance
class Product implements IProduct {
    readonly id: ID;
    name: string;
    price: number;

    constructor(id: ID, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    get Price(): number {
        return this.price;
    }
    set Price(newPrice: number) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = newPrice;
    }
    display() {
        console.log(`${this.name} - Rs: ${this.price}`);
    }
}
const p: Product = new Product(123, "Pen", 50);
p.display();
try {
    p.Price = -1;
}
catch (err: any) {
    //typecast
    let errorInfo: Error = (err as Error);
    console.log("Error Occurred:", errorInfo.message);
}
p.display();

class ProductWithSupplier extends Product {
    constructor(id: ID, name: string, price: number, private supplierName: string) {
        super(id, name, price); //Accessing base class construtor
    }
    get Supplier(): string {
        return this.supplierName;
    }
    set Supplier(sName: string) {
        sName = sName.trim();
        if (sName.length < 2) {
            throw new Error("Name too short");
        }
        this.supplierName = sName;
    }
    //no need to write the private supplierName:string
    //and then write this.supplierName = supplierName,
}

