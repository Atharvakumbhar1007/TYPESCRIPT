"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class queue {
    items = [];
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
    get size() {
        return this.items.length;
    }
}
const ages = new queue();
ages.enqueue(24);
ages.enqueue(41);
console.log(ages);
ages.dequeue();
console.log(ages);
console.log(ages.peek());
//# sourceMappingURL=queue.js.map