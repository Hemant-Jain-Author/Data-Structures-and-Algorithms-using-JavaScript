class QueueNode {
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
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
        this.length++;
    }

    remove() {
        if (this.isEmpty())
            throw new Error("StackEmptyError");
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    print() {
        let output = "", temp = this.head;
        while (temp != null) {
            output += `${temp.value} `
            temp = temp.next;
        }
        console.log(output);
    }
}

// Testing code.
const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
que.print();
console.log("isEmpty : " + que.isEmpty());
console.log("size : " + que.size());
console.log("Queue remove : " + que.remove());
console.log("Queue remove : " + que.remove());

/*
1 2 3 
isEmpty : false
size : 3
Queue remove : 1
Queue remove : 2
*/