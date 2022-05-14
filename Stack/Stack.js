class Stack {
    constructor(capacity) {
        this.arr = [];
    }
    /* other methods */

    size() {
        return this.arr.length;
    }

    isEmpty() {
        return (this.arr.length === 0);
    }

    push(value) {
        this.arr.push(value);
    }

    top() {
        if (this.isEmpty()) {
            throw new Error("Stack Empty Exception");
        }
        return this.arr[this.arr.length-1];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack Empty Exception");
        }
        return this.arr.pop();
    }

    print() {
            console.log(this.arr);
    }
}

// Testing code.
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());

/*
[ 1, 2, 3 ]
3
2
1
*/