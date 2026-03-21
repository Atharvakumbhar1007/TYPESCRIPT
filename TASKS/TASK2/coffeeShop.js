"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CupSize;
(function (CupSize) {
    CupSize["Small"] = "SMALL";
    CupSize["Medium"] = "MEDIUM";
    CupSize["Large"] = "LARGE";
})(CupSize || (CupSize = {}));
;
const menu = [
    { name: "Espresso", price: 120, available: true },
    { name: "Latte", price: 180, available: true },
    { name: "Mochaa", price: 200, available: false },
    { name: "Cappuccino", price: 160, available: true }
];
function printBill(order) {
    let total = order.item.price * order.quantity;
}
const order1 = {
    customerName: "Aryan",
    item: menu[1],
    quantity: 2,
    paymentMethod: "card",
    discountPercent: 10
};
const order2 = {
    customerName: "Priya",
    item: menu[3],
    size: CupSize.Large,
    quantity: 1,
    paymentMethod: "cash",
    discountPercent: null
};
printBill(order1);
printBill(order2);
//# sourceMappingURL=coffeeShop.js.map