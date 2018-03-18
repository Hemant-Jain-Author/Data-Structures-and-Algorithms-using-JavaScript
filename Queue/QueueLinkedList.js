function QueueNode(v, n) {
    this.value = 0;
    this.value = v;
    this.next = n;
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    static length() {
        return this.size;
    }

    static isEmpty() {
        return this.size === 0;
    }

    static peek() {
        if (this.isEmpty())
            throw new Error("StackEmptyError");
        return this.head.value;
    }

    static add(value) {
        const temp = new QueueNode(value, null);
        if (this.head == null)
            this.head = this.tail = temp;
        else {
            this.tail.next = temp;
            this.tail = temp;
        }
        this.size++;
    }

    static remove() {
        if (this.isEmpty())
            throw new Error("StackEmptyError");
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    static print() {
        let temp = this.head;
        while ((temp != null)) {
            console.log(`${temp.value} `);
            temp = temp.next;
        };
    }
}

const q = new Queue();
for (var i = 1; i <= 100; i++) {
    q.add(i);
}
for (var i = 1; i <= 50; i++) {
    q.remove();
}
q.print();