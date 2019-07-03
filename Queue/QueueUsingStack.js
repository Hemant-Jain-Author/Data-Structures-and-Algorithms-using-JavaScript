class Queue {
    constructor() {
        this.stk1 = [];
        this.stk2 = [];
    }

    length() {
        return (this.stk1.length + this.stk2.length);
    }

    isEmpty() {
        return (this.stk1.length + this.stk2.length) === 0;
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
}

const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
while (que.isEmpty() === false)
    console.log(que.remove());
