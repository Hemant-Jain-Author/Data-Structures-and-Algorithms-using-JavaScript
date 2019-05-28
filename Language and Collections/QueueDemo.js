class Queue {
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

function main() {
    const que = new Queue();
    que.add(1);
    que.add(2);
    que.add(3);
    console.info(que);
    console.info(`Queue size : ${que.size()}`);
    console.info(`Queue fornt : ${que.front()}`);
    console.info(`Queue remove : ${que.remove()}`);
    console.info(`Queue size : ${que.size()}`);
    console.info(`Queue isEmpty : ${que.isEmpty()}`);
};

main();