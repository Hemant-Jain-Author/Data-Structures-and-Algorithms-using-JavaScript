class Stack {
    constructor(capacity) {
        this.data = [];
    }
    /* other methods */

    size() {
        return this.data.length;
    }

    isEmpty() {
        return (this.data.length === 0);
    }

    push(value) {
        this.data.push(value);
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("Stack Empty Exception");
        }
        return this.data[this.data.length-1];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Empty Exception");
        }
        return this.data.pop();
    }

    print() {
            console.log(this.data);
    }
}

// Testing code.
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.info(s.pop());
console.info(s.pop());
console.info(s.pop());