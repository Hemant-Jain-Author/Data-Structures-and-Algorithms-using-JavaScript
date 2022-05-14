class DLLNode {
    constructor(v, nxt, prv) {
        this.value = v;
        this.next = nxt;
        this.prev = prv;
    }
}

class DoublyLinkedList {
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
            throw new Error("EmptyListError");
        return this.head.value;
    }

    /* Other methods */

    addHead(value) {
        const newNode = new DLLNode(value, null, null);
        if (this.length === 0) {
            this.tail = this.head = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    addTail(value) {
        const newNode = new DLLNode(value, null, null);
        if (this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeHead() {
        if (this.isEmpty())
            throw new Error("EmptyListError");
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head == null)
            this.tail = null;
        else
            this.head.prev = null;
        this.length--;
        return value;
    }

    removeNode(key) {
        let curr = this.head;
        if (curr == null)
            return false;

        if (curr.value === key) {
            this.head = this.head.next;
            this.length--;
            if (this.head != null)
                this.head.prev = null;
            else
                this.tail = null;
            return true;
        }

        while (curr.next != null) {
            if (curr.next.value === key) {
                curr.next = curr.next.next;
                if (curr.next == null)
                    this.tail = curr;
                else
                    curr.next.prev = curr;
                this.length--;
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    find(key) {
        let temp = this.head;
        while (temp != null) {
            if (temp.value === key)
                return true;
            temp = temp.next;
        }
        return false;
    }

    freeList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
        process.stdout.write("\n");
    }

    sortedInsert(value) {
        const temp = new DLLNode(value, null, null);
        let curr = this.head;

        if (curr == null) {  // empty list
            this.head = temp;
            this.tail = temp;
            return;
        }
        
        if (this.head.value > value) { // First node.
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
            return;
        }
        
        while (curr.next != null && curr.next.value < value) {
            curr = curr.next;
        }

        if (curr.next == null) { // Last node
            this.tail = temp;
            temp.prev = curr;
            curr.next = temp;
        } else {
            temp.next = curr.next;
            temp.prev = curr;
            curr.next = temp;
            temp.next.prev = temp;
        }
    }

    reverseList() {
        let curr = this.head;
        let tempNode;
        while (curr != null) {
            tempNode = curr.next;
            curr.next = curr.prev;
            curr.prev = tempNode;
            if (curr.prev == null) {
                this.tail = this.head;
                this.head = curr;
                return;
            }
            curr = curr.prev;
        }
    }

    removeDuplicate() {
        let curr = this.head;
        while (curr != null) {
            if ((curr.next != null) && curr.value == curr.next.value) {
                curr.next = curr.next.next;
                if(curr.next != null)
                    curr.next.prev = curr;
                else 
                    this.tail = curr;
            } else {
                curr = curr.next;
            }
        }
    }

    copyListReversed() {
        const dll = new DoublyLinkedList();
        let curr = this.head;
        while (curr != null) {
            dll.addHead(curr.value);
            curr = curr.next;
        }
        return dll;
    }

    copyList() {
        const dll = new DoublyLinkedList();
        let curr = this.head;
        while (curr != null) {
            dll.addTail(curr.value);
            curr = curr.next;
        }
        return dll;
    }
}

// Testing code.
function main1() {
    let ll = new DoublyLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();
    console.log("size : " + ll.size());
    console.log("isEmpty : " + ll.isEmpty());
        
    ll.removeHead();
    ll.print();
	console.log(ll.find(2));
}
	/*
3 2 1 
size : 3
isEmpty : false
2 1 
true
	*/

function main2() {
    let ll = new DoublyLinkedList();
    ll.sortedInsert(1);
    ll.sortedInsert(2);
    ll.sortedInsert(3);
    ll.print();
    ll.sortedInsert(1);
    ll.sortedInsert(2);
    ll.sortedInsert(3);
    ll.print();
    ll.removeDuplicate();
    ll.print();
}
/*
1 2 3 
1 1 2 2 3 3 
1 2 3 
*/

function main3() {
    let ll = new DoublyLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();

    let l2 = ll.copyList();
    l2.print();
    let l3 = ll.copyListReversed();
    l3.print();
}
/*
3 2 1 
3 2 1 
1 2 3
*/

function main4() {
    let ll = new DoublyLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();

    ll.removeNode(2);
    ll.print();
}

/*
3 2 1 
3 1 
*/

function main5() {
    let ll = new DoublyLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();
    ll.reverseList();
    ll.print();
}

/*
3 2 1
1 2 3
*/

main1();
main2();
main3();
main4();
main5();