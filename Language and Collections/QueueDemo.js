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

    length() {
        return this.arr.length
    }
}

const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
console.log(que);
console.log(`Queue size : ${que.length()}`);
console.log(`Queue isEmpty : ${que.isEmpty()}`);
console.log(`Queue front : ${que.front()}`);
console.log(`Queue remove : ${que.remove()}`);
console.log(`Queue size : ${que.length()}`);


/*
Queue { arr: [ 1, 2, 3 ] }
Queue size : 3
Queue isEmpty : false
Queue front : 1
Queue remove : 1
Queue size : 2

*/