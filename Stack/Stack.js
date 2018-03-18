class Stack {
    constructor(cap) {
        this.MIN_CAPACITY = 1000;
        if (cap === void 0) {
            this.capacity = MIN_CAPACITY;
        } else {
            this.capacity = cap
        }
        this.top = -1;
        this.data = new Array(this.capacity);
    }

    size() {
        return (this.top + 1);
    }

    isEmpty() {
        return (this.top === -1);
    }

    push(value) {
        if (this.size() === this.capacity ) {
            throw new Error("StackFullException");
        }
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
        let str = "[ "
        for (let i = this.top; i >= 0; i--) {
            str = str + this.data[i] + " "
        }
        str += "]"
        console.log(str)
    }
}

const s = new Stack(100);
for (var i = 1; i <= 100; i++) {
    s.push(i);
}
for (var i = 1; i <= 100; i++) {
    s.pop();
}
s.print();