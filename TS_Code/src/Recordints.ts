type Permission = "read" | "write" | "delete";
type Role = "admin" | "guest" | "user";
const permissions: Record<Role, Permission[]> = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"]
}

function hasPermission(role: Role, action: Permission) {
    return permissions[role].includes(action);
}
console.log(hasPermission("guest", "delete"));

type Employee = {
    name: string;
    role: Role
};

const e1: Employee = { name: "Aditi", role: "user" };
const e2: Employee = { name: "Vihang", role: "admin" };

function canUser(user: Employee, action: Permission) {
    return hasPermission(user.role, action);
}
console.log(canUser(e1, "delete"));