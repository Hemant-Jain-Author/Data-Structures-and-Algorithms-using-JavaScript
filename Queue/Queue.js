
class Queue {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {
        return this.arr.shift();
    }

    front() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length === 0
    }

    size() {
        return this.arr.length
    }
}

// Testing code.
const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
while (que.isEmpty() === false) {
    console.log(que.remove());
}
