"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//use implement for interfaces,
//extends for inheritance
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    get Price() {
        return this.Price;
    }
    set Price(NewPrice) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = NewPrice;
    }
    display() {
        console.log(`${this.name} - Rs: ${this.Price}`);
    }
}
const p = new Product(123, "Pen", 50);
p.display();
p.Price = -1;
p.display();
//# sourceMappingURL=ecom.js.map