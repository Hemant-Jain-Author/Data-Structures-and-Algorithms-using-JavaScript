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

function main() {
    const que = new Queue();
    que.add(1);
    que.add(2);
    que.add(3);
    console.info(que);
    console.info(`Queue size : ${que.length()}`);
    console.info(`Queue isEmpty : ${que.isEmpty()}`);
    console.info(`Queue front : ${que.front()}`);
    console.info(`Queue remove : ${que.remove()}`);
    console.info(`Queue size : ${que.length()}`);
    console.info(`Queue remove : ${que.remove()}`);
    console.info(`Queue remove : ${que.remove()}`);
    console.info(`Queue isEmpty : ${que.isEmpty()}`);
};

main();

/*
Queue { arr: [ 1, 2, 3 ] }
Queue size : 3
Queue front : 1
Queue remove : 1
Queue size : 2
Queue isEmpty : false
*/