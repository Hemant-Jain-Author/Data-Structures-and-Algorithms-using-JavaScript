class LinkedListNode {
    constructor(v, n) {
        this.value = v;
        this.next = n;
    }
}

class LinkedList {
    constructor() {
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

    addHead(value) {
        this.head = new LinkedListNode(value, this.head);
        this.length++;
    }

    addTail(value) {
        const newNode = new LinkedListNode(value, null);
        let curr = this.head;
        if (this.head == null) {
            this.head = newNode;
        }
        while (curr.next != null) {
            curr = curr.next;
        };
        curr.next = newNode;
    }

    removeHead() {
        if (this.isEmpty())
            throw new Error("EmptyListError");
        
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    find(data) {
        let temp = this.head;
        while (temp != null) {
            if (temp.value === data)
                return true;
            temp = temp.next;
        };
        return false;
    }

    deleteNode(delValue) {
        let temp = this.head;
        if (this.isEmpty())
            return false;
        
        if (delValue === this.head.value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }
        
        while (temp.next != null) {
            if (temp.next.value === delValue) {
                temp.next = temp.next.next;
                this.length--;
                return true;
            }
            temp = temp.next;
        };
        return false;
    }

    deleteNodes(delValue) {
        let currNode = this.head;
        let nextNode;
        while (currNode != null && currNode.value === delValue) {
            this.head = currNode.next;
            currNode = this.head;
        };
        
        while (currNode != null) {
            nextNode = currNode.next;
            if (nextNode != null && nextNode.value === delValue) {
                currNode.next = nextNode.next;
            }
            else {
                currNode = nextNode;
            }
        };
    }

    reverseRecurseUtil(currentNode, nextNode) {
        if (currentNode == null)
            return null;
        
        if (currentNode.next == null) {
            currentNode.next = nextNode;
            return currentNode;
        }
        const ret = this.reverseRecurseUtil(currentNode.next, currentNode);
        currentNode.next = nextNode;
        return ret;
    }

    reverseRecurse() {
        this.head = this.reverseRecurseUtil(this.head, null);
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        let next = null;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        ;
        this.head = prev;
    }

    CopyListReversed() {
        let tempNode = null;
        let tempNode2 = null;
        let curr = this.head;
        while (curr != null) {
            tempNode2 = new LinkedListNode(curr.value, tempNode);
            curr = curr.next;
            tempNode = tempNode2;
        };
        const ll2 = new LinkedList();
        ll2.head = tempNode;
        return ll2;
    }

    copyList() {
        let headNode = null;
        let tailNode = null;
        let tempNode = null;
        let curr = this.head;
        if (curr == null)
            return null;
        headNode = new LinkedListNode(curr.value, null);
        tailNode = headNode;
        curr = curr.next;
        while (curr != null) {
            tempNode = new LinkedListNode(curr.value, null);
            tailNode.next = tempNode;
            tailNode = tempNode;
            curr = curr.next;
        };
        const ll2 = new LinkedList();
        ll2.head = headNode;
        return ll2;
    }

    compareList(head) {
        return this.compareListUtil(this.head, head);
    }

    compareListUtil(head1, head2) {
        if (head1 == null && head2 == null)
            return true;
        else if ((head1 == null) || (head2 == null) || (head1.value !== head2.value))
            return false;
        else
            return this.compareListUtil(head1.next, head2.next);

    }

    compareList2(head) {
        let head1 = this.head;
        let head2 = head;
        while (head1 == null &&
            head2 == null) {
            if (head1.value !== head2.value)
                return false;
            head1 = head1.next;
            head2 = head2.next;
        }
        if (head1 == null && head2 == null)
            return true;
        return false;
    }

    findLength() {
        let curr = this.head;
        let count = 0;
        while (curr != null) {
            count++;
            curr = curr.next;
        };
        return count;
    }

    nthNodeFromBegining(index) {
        if (index > this.size() || index < 1)
            throw new Error('TooFewNodes');;
        let count = 0;
        let curr = this.head;
        while (curr != null && count < index - 1) {
            count++;
            curr = curr.next;
        };
        return curr.value;
    }

    nthNodeFromEnd(index) {
        const  size = this.size();
        let startIndex;
        if (size !== 0 && size < index) {
            throw new Error('TooFewNodes');
        }
        startIndex = size - index + 1;
        return this.nthNodeFromBegining(startIndex);
    }

    nthNodeFromEnd2(index) {
        let count = 1;
        let forward = this.head;
        let curr = this.head;
        while (forward != null && count <= index) {
            count++;
            forward = forward.next;
        };
        if (forward == null)
            throw new Error('invalid arguments');
        
        while (forward != null) {
            forward = forward.next;
            curr = curr.next;
        };
        return curr.value;
    }

    findIntersection(head, head2) {
        let l1 = 0;
        let l2 = 0;
        let tempHead = head;
        let tempHead2 = head2;
        while (tempHead != null) {
            l1++;
            tempHead = tempHead.next;
        };
        
        while (tempHead2 != null) {
            l2++;
            tempHead2 = tempHead2.next;
        };
        let diff;
        if (l1 < 12) {
            const temp = head;
            head = head2;
            head2 = temp;
            diff = l2 - l1;
        }
        else {
            diff = l1 - l2;
        }
        for (; diff > 0; diff--) {
            head = head.next;
        }
        while (head !== head2) {
            head = head.next;
            head2 = head2.next;
        };
        return head;
    }

    freeList() {
        this.head = null;
        this.length = 0;
    }

    print() {
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        };
        process.stdout.write("\n");
    }

    sortedInsert(value) {
        const newNode = new LinkedListNode(value, null);
        let curr = this.head;
        if (curr == null || curr.value > value) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        while (curr.next != null && curr.next.value < value) {
            curr = curr.next;
        };
        newNode.next = curr.next;
        curr.next = newNode;
    }

    removeDuplicate() {
        let curr = this.head;
        while (curr != null) {
            if (curr.next != null && curr.value === curr.next.value) {
                curr.next = curr.next.next;
            }
            else {
                curr = curr.next;
            }
        };
    }

    makeLoop() {
        let temp = this.head;
        while (temp != null) {
            if (temp.next == null) {
                temp.next = this.head;
                return;
            }
            temp = temp.next;
        };
    }

    loopDetect() {
        let slowPtr;
        let fastPtr;
        slowPtr = fastPtr = this.head;
        while (fastPtr.next != null && fastPtr.next.next != null) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            if (slowPtr === fastPtr) {
                console.log("loop found");
                return true;
            }
        };
        console.log("loop not found");
        return false;
    }

    reverseListLoopDetect() {
        const tempHead = this.head;
        this.reverse();
        if (tempHead === this.head) {
            this.reverse();
            console.log("loop found");
            return true;
        }
        else {
            this.reverse();
            console.log("loop not found");
            return false;
        }
    }

    loopTypeDetect() {
        let slowPtr = this.head;
        let fastPtr = this.head;
        while (fastPtr.next != null && fastPtr.next.next != null) {
            if (this.head === fastPtr.next || this.head === fastPtr.next.next) {
                console.log("circular list loop found");
                return 2;
            }
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            if (slowPtr === fastPtr) {
                console.log("loop found");
                return 1;
            }
        };
        console.log("loop not found");
        return 0;
    }

    loopPointDetect() {
        let slowPtr = this.head;
        let fastPtr = this.head;
        while (fastPtr.next != null && fastPtr.next.next != null) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            if (slowPtr === fastPtr) {
                return slowPtr;
            }
        };
        return null;
    }

    removeLoop() {
        const loopPoint = this.loopPointDetect();
        if (loopPoint == null)
            return;
        let firstPtr = this.head;
        if (loopPoint === this.head) {
            while (firstPtr.next !== this.head)
                firstPtr = firstPtr.next;
            firstPtr.next = null;
            return;
        }
        let secondPtr = loopPoint;
        while (firstPtr.next !== secondPtr.next) {
            firstPtr = firstPtr.next;
            secondPtr = secondPtr.next;
        };
        secondPtr.next = null;
    }
}

const ll = new LinkedList();
ll.addHead(1);
ll.addHead(2);
ll.addHead(3);
ll.print();


/*
for (let i = 0; i < 5; i++) {
    ll.addHead(i);
}
for (let i = 0; i < 5; i++) {
    ll.addTail(i);
}
ll.print();

console.log(ll.peek())
ll.removeHead()
ll.print();
console.log(ll.find(3))
ll.deleteNode(3)
console.log(ll.find(3))
ll.deleteNodes(2)
console.log(ll.find(2))
ll.reverse()
ll.print();
ll.reverseRecurse()
ll.print();

console.log(ll.nthNodeFromBegining(2));
console.log(ll.nthNodeFromEnd(2));
console.log(ll.nthNodeFromEnd2(2));
console.log(ll.findLength())
ll.freeList()
console.log(ll.findLength())

ll.sortedInsert(1)
ll.sortedInsert(2)
ll.sortedInsert(2)
ll.sortedInsert(3)
ll.sortedInsert(4)
ll.sortedInsert(1)
ll.sortedInsert(2)
ll.sortedInsert(4)
ll.print()
ll.removeDuplicate()
ll.print()

ll.makeLoop()
console.log(ll.loopDetect())
console.log(ll.reverseListLoopDetect())
console.log(ll.loopTypeDetect())
ll.removeLoop()
ll.print()


ll.addHead(1);
ll.addHead(2);
ll.addHead(3);
ll.addTail(1);
ll.addTail(2);
ll.addTail(3);
ll.print();
console.log(ll.size())
console.log(ll.isEmpty())
console.log(ll.peek())
ll.deleteNode(3)
ll.print()
console.log(ll.find(3))
ll.removeHead();
ll.print()
ll.freeList()
ll.print();
*/