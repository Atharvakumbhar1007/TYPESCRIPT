type ID = string | number;

interface IProduct {
    id: ID;
    name: string;
    price: number;
}

class Product implements IProduct {
    readonly id: ID;
    name: string;
    private price: number; // better to keep it private

    constructor(id: ID, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    get Price(): number {
        return this.price; // ✅ correct
    }

    set Price(newPrice: number) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = newPrice;
    }

    display() {
        console.log(`${this.name} - Rs: ${this.Price}`);
    }
}

const p: Product = new Product(123, "Pen", 50);
p.display();
try {
    p.Price = -1;
}
catch (err: any) {
    //Typecast
    let errorInfo: Error = (err as Error);
    console.log("Error Occurred:", errorInfo.message)

}

p.display();

