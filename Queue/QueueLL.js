class QueueNode {
    constructor(v, n) {
        this.value = 0;
        this.value = v;
        this.next = n;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    length() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.isEmpty())
            throw new Error("StackEmptyError");
        return this.head.value;
    }

    add(value) {
        const temp = new QueueNode(value, null);
        if (this.head == null)
            this.head = this.tail = temp;
        else {
            this.tail.next = temp;
            this.tail = temp;
        }
        this.size++;
    }

    

    remove() {
        if (this.isEmpty())
            throw new Error("StackEmptyError");
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(`${temp.value} `)
            temp = temp.next;
       };
    }
}

const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
while (que.isEmpty() === false) {
    console.log(que.remove());
}