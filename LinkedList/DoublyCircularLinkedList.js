class DCLLNode {
    constructor(v, nxt, prv) {
        this.value = v;
        this.next = nxt;
        this.prev = prv;
    }
}

class DoublyCircularLinkedList {
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

    peekHead() {
        if (this.isEmpty())
            throw new Error("EmptyListError");
        return this.head.value;
    }

    addHead(value) {
        const newNode = new DCLLNode(value, null, null);
        if (this.length === 0) {
            this.tail = this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else {
            newNode.next = this.head;
            newNode.prev = this.head.prev;
            this.head.prev = newNode;
            newNode.prev.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    addTail(value) {
        const newNode = new DCLLNode(value, null, null);
        if (this.length === 0) {
            this.head = this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else {
            newNode.next = this.tail.next;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            newNode.next.prev = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeHead() {
        if (this.length === 0)
            throw new Error("EmptyListError");
        const value = this.head.value;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return value;
        }
        const next = this.head.next;
        next.prev = this.tail;
        this.tail.next = next;
        this.head = next;
        return value;
    }

    removeTail() {
        if (this.length === 0)
            throw new Error("EmptyListError");
        const value = this.tail.value;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return value;
        }
        const prev = this.tail.prev;
        prev.next = this.head;
        this.head.prev = prev;
        this.tail = prev;
        return value;
    }

    find(key) {
        let temp = this.head;
        if (this.head == null)
            return false;
        do {
            if (temp.value === key)
                return true;
            temp = temp.next;
        } while (temp !== this.head);
        return false;
    }

    free() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        if (this.isEmpty()) {
            return;
        }
        let temp = this.head;
        while (temp !== this.tail) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        };
        process.stdout.write(`${temp.value}\n`);
    }
}

const ll = new DoublyCircularLinkedList();
ll.addHead(1);
ll.addHead(2);
ll.addHead(3);
ll.addTail(11);
ll.addTail(22);
ll.addTail(33);
ll.print();
console.log(ll.size())
console.log(ll.isEmpty())
console.log(ll.peekHead())
console.log(ll.removeHead())
console.log(ll.removeTail())
ll.print();
console.log(ll.find(22))
console.log(ll.find(25))
ll.free()
ll.print();
console.log(ll.size())
console.log(ll.isEmpty())