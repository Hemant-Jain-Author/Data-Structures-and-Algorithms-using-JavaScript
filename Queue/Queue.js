
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

    print() {
        console.log(this.arr);
    }
}

// Testing code.
const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
que.print();
console.log("isEmpty : " + que.isEmpty());
console.log("size : " + que.size());
console.log("Queue remove : " + que.remove());
console.log("Queue remove : " + que.remove());

/*
[ 1, 2, 3 ]
isEmpty : false
size : 3
Queue remove : 1
Queue remove : 2
*/