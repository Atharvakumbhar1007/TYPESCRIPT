enum CupSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
};

type MenuItem = {
    name: String;
    price: number; //(price in Rs. for a single cup)
    available: boolean;
};

type Order = {
    customerName: string;
    item: MenuItem;
    size: CupSize;
    quantity: number;
    paymentMethod: "cash" | "card"; //(union type — only these two values allowed)
    discountPercent: number | null; //(null means no discount is applied)
};

const menu: MenuItem[] = [
    { name: "Espresso", price: 120, available: true },
    { name: "Latte", price: 180, available: true },
    { name: "Mochaa", price: 200, available: false },
    { name: "Cappuccino", price: 160, available: true }
];

function printBill(order: order): void {
    let total = order.item.price * order.quantity;
}


























const order1: Order = {
    customerName: "Aryan",
    item: menu[1],
    quantity: 2,
    paymentMethod: "card",
    discountPercent: 10
};

const order2: Order = {
    customerName: "Priya",
    item: menu[3],
    size: CupSize.Large,
    quantity: 1,
    paymentMethod: "cash",
    discountPercent: null
};

printBill(order1);
printBill(order2);