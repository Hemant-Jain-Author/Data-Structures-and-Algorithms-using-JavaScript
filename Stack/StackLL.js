class StackNode {
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
};

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("StackEmptyError");
        }
        return this.head.value;
    }

    push(value) {
        this.head = new StackNode(value, this.head);
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("StackEmptyError");
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    insertAtBottom(value) {
        if (this.isEmpty()) {
            this.push(value);
        }
        else {
            const temp = this.pop();
            this.insertAtBottom(value);
            this.push(temp);
        }
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.value);
            temp = temp.next;
        };
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.info(s.pop());
console.info(s.pop());
console.info(s.pop());