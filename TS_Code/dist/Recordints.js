"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"]
};
function hasPermission(role, action) {
    return permissions[role].includes(action);
}
console.log(hasPermission("guest", "delete"));
const e1 = { name: "Aditi", role: "user" };
const e2 = { name: "Vihang", role: "admin" };
function canUser(user, action) {
    return hasPermission(user.role, action);
}
console.log(canUser(e1, "delete"));
//# sourceMappingURL=Recordints.js.map