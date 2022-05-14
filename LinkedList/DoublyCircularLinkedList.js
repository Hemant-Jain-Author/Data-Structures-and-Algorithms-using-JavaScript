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
	/* Other methods */

    addHead(value) {
        const newNode = new DCLLNode(value, null, null);
        if (this.length === 0) {
            this.tail = this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
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
        } else {
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

    freeList() {
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
        }
        process.stdout.write(`${temp.value}\n`);
    }
}

function main1() {
    let ll = new DoublyCircularLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();
    console.log("Size : " + ll.size());
    console.log("Is empty : " + ll.isEmpty());
    console.log("Peek : " + ll.peekHead());
    console.log("search : " + ll.find(3));
}

/*
3 2 1
3
false
3
true
*/

function main2() {
    let ll = new DoublyCircularLinkedList();
    ll.addTail(1);
    ll.addTail(2);
    ll.addTail(3);
    ll.print();

	ll.removeHead();
	ll.print();
	ll.removeTail();
	ll.print();
	ll.freeList();
	ll.print();
}

/*
1 2 3
2 3
2
Empty List.
*/

function main3() {
    let ll = new DoublyCircularLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();
    ll.removeHead();
    ll.print();

}

/*
3 2 1
2 1
*/

function main4() {
    let ll = new DoublyCircularLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();

    ll.removeTail();
    ll.print();
}

/*
3 2 1
3 2
*/
	
main1();
main2();
main3();
main4();
