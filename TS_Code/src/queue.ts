class queue<T> {
    private items: T[] = [];
    enqueue(item: T): void {
        this.items.push(item);
    }
    dequeue(): T | undefined {
        return this.items.shift();
    }
    peek(): T | undefined {
        return this.items[0];
    }
    get size(): number {
        return this.items.length;
    }
}

const ages = new queue<number>();

ages.enqueue(24);
ages.enqueue(41);
console.log(ages);
ages.dequeue();
console.log(ages);
console.log(ages.peek());