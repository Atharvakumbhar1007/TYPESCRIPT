type Product = {
    id: string;
    name: string;
    cost: number;
    discription: string;
}
type Category = "Hardware_Components" | "Electronic" | "Clothing";

type Categoryfeature = {
    Hardware_Components: "Keyboard" | "Mouse" | "Display";
    Electronic: "brand" | "warranty" | "Quality";
    Clothing: "Branded" | "Modern" | "Size";
};

type Permission = "international" | "local" | "small" | "large" | "mid";
type Role = "Brand" | "Quality" | "Size";
const permissions: Record<Role, Permission[]> = {
    Brand: ["local", "international"],
    Quality: ["international", "local"],
    Size: ["small", "mid", "large"]
}

function hasPermission(role: Role, action: Permission) {
    return permissions[role].includes(action);
}
console.log(hasPermission("", "delete"));

type Product1 = {
    name: string;
    role: Role
};

const e1: Product1 = { name: "Mouse", role: "Hardware" };
const e2: Product1 = { name: "", role: "admin" };

function canUser(user: Employee, action: Permission) {
    return hasPermission(user.role, action);
}
console.log(canUser(e1, "delete"));
