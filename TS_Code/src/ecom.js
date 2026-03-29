"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//use implements for interfaces,
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
        return this.price;
    }
    set Price(newPrice) {
        if (newPrice < 0) {
            throw new Error("Price cannot be negative");
        }
        this.price = newPrice;
    }
    display() {
        console.log(`${this.name} - Rs: ${this.price}`);
    }
}
const p = new Product(123, "Pen", 50);
p.display();
try {
    p.Price = -1;
}
catch (err) {
    //typecast
    let errorInfo = err;
    console.log("Error Occurred:", errorInfo.message);
}
p.display();
class ProductWithSupplier extends Product {
    supplierName;
    constructor(id, name, price, supplierName) {
        super(id, name, price); //Accessing base class construtor
        this.supplierName = supplierName;
    }
    get Supplier() {
        return this.supplierName;
    }
    set Supplier(sName) {
        sName = sName.trim();
        if (sName.length < 2) {
            throw new Error("Name too short");
        }
        this.supplierName = sName;
    }
}
//# sourceMappingURL=ecom.js.map