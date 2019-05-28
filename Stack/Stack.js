class Stack {
    constructor(capacity) {
        if (capacity === undefined) { capacity = 1000; }
        this.top = -1;
        this.data = new Array(capacity);
    }
    /* other methods */

size() {
    return (this.top + 1);
}

isEmpty() {
    return (this.top === -1);
}

push(value) {
    this.top++;
    this.data[this.top] = value;
}

top() {
    if (this.isEmpty()) {
        throw new Error("StackEmptyException");
    }
    return this.data[this.top];
}

pop() {
    if (this.isEmpty()) {
        throw new Error("StackEmptyException");
    }
    const topVal = this.data[this.top];
    this.top--;
    return topVal;
}

print() {
    for (let i = this.top; i >= 0; i--) {
        console.log(this.data[i]);
    }
}
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.info(s.pop());
console.info(s.pop());
console.info(s.pop());