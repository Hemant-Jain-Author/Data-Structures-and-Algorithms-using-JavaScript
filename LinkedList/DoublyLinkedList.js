class LinkedListNode {
    constructor(v, n = null, p = null) {
            this.value = v;
            this.next = n;
            this.prev = p;
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
            throw new java.lang.IllegalStateError("EmptyListError");
        return this.head.value;
    }

    addHead(value) {
        const newNode = new LinkedListNode(value, null, null);
        if (this.length === 0) {
            this.tail = this.head = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    addTail(value) {
        const newNode = new LinkedListNode(value, null, null);
        if (this.length === 0) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeHead() {
        if (this.isEmpty())
            throw new java.lang.IllegalStateError("EmptyListError");
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
        while ((curr.next != null)) {
            if (curr.next.value === key) {
                curr.next = curr.next.next;
                if (curr.next == null)
                    this.tail = curr;
                else
                    curr.next = curr;
                this.length--;
                return true;
            }
            curr = curr.next;
        };
        return false;
    }

    find(key) {
        let temp = this.head;
        while ((temp != null)) {
            if (temp.value === key)
                return true;
            temp = temp.next;
        };
        return false;
    }

    freeList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let temp = this.head;
        let str = ""
        while ((temp != null)) {
            str += temp.value
            str += " "
            temp = temp.next;
        }
        console.log(str)
    }

    sortedInsert(value) {
        const temp = new LinkedListNode(value);
        let curr = this.head;
        if (curr == null) {
            this.head = temp;
            this.tail = temp;
        }
        if (this.head.value <= value) {
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
        while ((curr.next != null && curr.next.value > value)) {
            curr = curr.next;
        };
        if (curr.next == null) {
            this.tail = temp;
            temp.prev = curr;
            curr.next = temp;
        }
        else {
            temp.next = curr.next;
            temp.prev = curr;
            curr.next = temp;
            temp.next.prev = temp;
        }
    }

    reverseList() {
        let curr = this.head;
        let tempNode;
        while ((curr != null)) {
            tempNode = curr.next;
            curr.next = curr.prev;
            curr.prev = tempNode;
            if (curr.prev == null) {
                this.tail = this.head;
                this.head = curr;
                return;
            }
            curr = curr.prev;
        };
    }

    removeDuplicate() {
        let curr = this.head;
        let deleteMe;
        while ((curr != null)) {
            if ((curr.next != null) && curr.value === curr.next.value) {
                deleteMe = curr.next;
                curr.next = deleteMe.next;
                curr.next.prev = curr;
                if (deleteMe === this.tail) {
                    this.tail = curr;
                }
            }
            else {
                curr = curr.next;
            }
        };
    }

    copyListReversed() {
        const dll = new DoublyLinkedList();
        let curr = this.head;
        while ((curr != null)) {
            dll.addHead(curr.value);
            curr = curr.next;
        };
        return dll;
    }

    copyList() {
        const dll = new DoublyLinkedList();
        let curr = this.head;
        while ((curr != null)) {
            dll.addTail(curr.value);
            curr = curr.next;
        };
        return dll;
    }
}

const ll = new DoublyLinkedList();
ll.addHead(1);
ll.addHead(2);
ll.addHead(3);
ll.addHead(4);
ll.addHead(5);
ll.addHead(6);
ll.removeHead();

ll.print();
ll.freeList();
ll.addHead(11);
ll.addHead(21);
ll.addHead(31);
ll.addHead(41);
ll.addHead(51);
ll.addHead(61);
ll.print();