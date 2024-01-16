
class Deque {
    constructor() {
        this.arr = ([]);
    }

    size() {
        return this.arr.length;
    }

    isEmpty() {
        return this.arr.length === 0
    }
    
    add(val) {
        this.arr.push(val);
    }

    remove() {
        return this.arr.shift();
    }

    front() {
        return this.arr[0]
    }

    back() {
        return this.arr[this.arr.length - 1]
    }

    removeLast() {
        return this.arr.pop()
    }
}

// Testing code.
const que = new Deque();
que.add(1);
que.add(2);
que.add(3);
que.add(4);
while (que.isEmpty() === false) {
    console.log(que.removeLast());
    console.log(que.remove());
}