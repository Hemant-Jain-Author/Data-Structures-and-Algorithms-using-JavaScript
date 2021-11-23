class Queue2 {
    constructor() {
        this.stk1 = [];
        this.stk2 = [];
    }

    add(value) {
        this.stk1.push(value);
    }

    remove() {
        let value;
        if (this.stk2.length > 0) {
            return this.stk2.pop();
        }
        while (this.stk1.length > 0) {
            value = this.stk1.pop();
            this.stk2.push(value);
        };
        return this.stk2.pop();
    }

    front() {
        let value;
        if (this.stk2.length < 1) {
            while (this.stk1.length > 0) {
                value = this.stk1.pop();
                this.stk2.push(value);
            };
        }
        return this.stk2[this.stk2.length - 1];
    }

    isEmpty() {
        return (this.stk1.length + this.stk2.length) === 0
    }

    size() {
        return (this.stk1.length + this.stk2.length)
    }
}

class Queue {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {
        let value = this.arr[0];
        this.arr.shift();
        return value;
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

function main() {
    const que = new Queue();
    que.add(1);
    que.add(2);
    que.add(3);
    console.info(que);
    console.info(`Queue size : ${que.size()}`);
    console.info(`Queue front : ${que.front()}`);
    console.info(`Queue remove : ${que.remove()}`);
    console.info(`Queue size : ${que.size()}`);
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