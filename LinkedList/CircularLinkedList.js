class CLNode {
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
}

class CircularLinkedList {
    constructor() {
        this.length = 0;
        this.tail = null;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if (this.isEmpty())
            throw new Error("EmptyListException");
        return this.tail.next.value;
    }

    addTail(value) {
        const temp = new CLNode(value, null);
        if (this.isEmpty()) {
            this.tail = temp;
            temp.next = temp;
        }
        else {
            temp.next = this.tail.next;
            this.tail.next = temp;
            this.tail = temp;
        }
        this.length++;
    }

    addHead(value) {
        const temp = new CLNode(value, null);
        if (this.isEmpty()) {
            this.tail = temp;
            temp.next = temp;
        }
        else {
            temp.next = this.tail.next;
            this.tail.next = temp;
        }
        this.length++;
    }

    removeHead() {
        if (this.isEmpty()) {
            throw new Error("EmptyListException");
        }

        const value = this.tail.next.value;
        if (this.tail === this.tail.next)
            this.tail = null;
        else
            this.tail.next = this.tail.next.next;
        this.length--;
        return value;
    }

    removeNode(key) {
        if (this.isEmpty()) {
            return false;
        }

        let prev = this.tail;
        let curr = this.tail.next;
        const head = this.tail.next;
        if (curr.value === key) {
            if (curr === curr.next)
                this.tail = null;
            else
                this.tail.next = this.tail.next.next;
            return true;
        }
        prev = curr;
        curr = curr.next;
        while (curr !== head) {
            if (curr.value === key) {
                if (curr === this.tail)
                    this.tail = prev;
                prev.next = curr.next;
                return true;
            }
            prev = curr;
            curr = curr.next;
        };
        return false;
    }

    copyListReversed() {
        const cl = new CircularLinkedList();
        let curr = this.tail.next;
        const head = curr;

        if (curr != null) {
            cl.addHead(curr.value);
            curr = curr.next;
        }
        while (curr !== head) {
            cl.addHead(curr.value);
            curr = curr.next;
        };
        return cl;
    }

    copyList() {
        const cl = new CircularLinkedList();
        let curr = this.tail.next;
        const head = curr;

        if (curr != null) {
            cl.addTail(curr.value);
            curr = curr.next;
        }
        while (curr !== head) {
            cl.addTail(curr.value);
            curr = curr.next;
        };
        return cl;
    }


    freeList() {
        this.tail = null;
        this.length = 0;
    }

    print() {
        if (this.isEmpty()) {
            return;
        }
        let temp = this.tail.next;
        while (temp !== this.tail) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        };
        process.stdout.write(`${temp.value}\n`);
    }

    find(data) {
        let temp = this.tail;
        const size = this.size();
        for (let i = 0; i < size; i++) {
            if (temp.value === data)
                return true;
            temp = temp.next;
        }
        return false;
    }
}

const ll = new CircularLinkedList();
ll.addHead(1);
ll.addHead(2);
ll.addHead(3);
ll.print();
ll.addTail(3)
ll.addTail(2)
ll.print();
console.log(ll.find(3))
console.log(ll.find(4))
const ll2 = ll.copyList()
ll2.print()
const ll3 = ll.copyListReversed()
ll3.print()