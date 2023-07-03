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
    // Other Methods.


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
        }
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
        }
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
        }
        return false;
    }

    deleteNodes(delValue) {
        let currNode = this.head;
        let nextNode;
        while (currNode != null && currNode.value === delValue) {
            this.head = currNode.next;
            currNode = this.head;
        }
        
        while (currNode != null) {
            nextNode = currNode.next;
            if (nextNode != null && nextNode.value === delValue) {
                currNode.next = nextNode.next;
            } else {
                currNode = nextNode;
            }
        }
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
        this.head = prev;
    }

    copyListReversed() {
        let tempNode = null;
        let tempNode2 = null;
        let curr = this.head;
        while (curr != null) {
            tempNode2 = new LinkedListNode(curr.value, tempNode);
            curr = curr.next;
            tempNode = tempNode2;
        }
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
        }
        const ll2 = new LinkedList();
        ll2.head = headNode;
        return ll2;
    }

    compareList(l2) {
        return this.compareListUtil(this.head, l2.head);
    }

    compareListUtil(head1, head2) {
        if (head1 == null && head2 == null)
            return true;
        else if ((head1 == null) || (head2 == null) || (head1.value !== head2.value))
            return false;
        else
            return this.compareListUtil(head1.next, head2.next);
    }

    compareList2(l2) {
        let head1 = this.head;
        let head2 = l2.head;
        while (head1 !== null && head2 !== null) {
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
        }
        return count;
    }

    nthNodeFromBeginning(index) {
        if (index > this.size() || index < 1)
            throw new Error('TooFewNodes');;
        let count = 0;
        let curr = this.head;
        while (curr != null && count < index - 1) {
            count++;
            curr = curr.next;
        }
        return curr.value;
    }

    nthNodeFromEnd(index) {
        const  size = this.size();
        let startIndex;
        if (size !== 0 && size < index) {
            throw new Error('TooFewNodes');
        }
        startIndex = size - index + 1;
        return this.nthNodeFromBeginning(startIndex);
    }

    nthNodeFromEnd2(index) {
        let count = 1;
        let forward = this.head;
        let curr = this.head;
        while (forward != null && count <= index) {
            count++;
            forward = forward.next;
        }
        if (forward == null)
            throw new Error('invalid arguments');
        
        while (forward != null) {
            forward = forward.next;
            curr = curr.next;
        }
        return curr.value;
    }

    findIntersection(ll2) {
        let l1 = 0;
        let l2 = 0;
        let tempHead = this.head;
        let tempHead2 = ll2.head;
        while (tempHead != null) {
            l1++;
            tempHead = tempHead.next;
        }
        
        while (tempHead2 != null) {
            l2++;
            tempHead2 = tempHead2.next;
        }
        let diff;
        tempHead = this.head;
        tempHead2 = ll2.head;
        if (l1 < l2) {
            const temp = tempHead;
            tempHead = tempHead2;
            tempHead2 = temp;
            diff = l2 - l1;
        } else {
            diff = l1 - l2;
        }

        for (; diff > 0; diff--) {
            tempHead = tempHead.next;
        }

        while (tempHead !== tempHead2) {
            tempHead = tempHead.next;
            tempHead2 = tempHead2.next;
        }
        return tempHead;
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
        }
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
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }

    removeDuplicate() {
        let curr = this.head;
        while (curr != null) {
            if (curr.next != null && curr.value === curr.next.value) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }
    }

    makeLoop() {
        let temp = this.head;
        while (temp != null) {
            if (temp.next == null) {
                temp.next = this.head;
                return;
            }
            temp = temp.next;
        }
    }

    loopDetect() {
        let curr = this.head;
        let hs = new Set();

        while (curr != null) {
            if(hs.has(curr)){
                console.log("loop found");
                return true;
            }

            hs.add(curr);
            curr = curr.next;
        }

        console.log("loop not found");
        return false;
    }

    loopDetect2() {
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
        }
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
        } else {
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
        }
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
        }
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
        }
        secondPtr.next = null;
    }

    bubbleSort() {
        let curr, end = null;
        let temp;

        if (this.head == null || this.head.next == null) {
            return;
        }

        let flag = true;
        while (flag) {
            flag = false;
            curr = this.head;
            while (curr.next != end) {
                if (curr.value > curr.next.value) {
                    flag = true;
                    temp = curr.value;
                    curr.value = curr.next.value;
                    curr.next.value = temp;
                }
                curr = curr.next;
            }
            end = curr;
        }
    }

    selectionSort() {
        let curr, end = null, maxNode;
        let temp, max;

        if (this.head == null || this.head.next == null) {
            return;
        }

        while (this.head != end) {
            curr = this.head;
            max = curr.value;
            maxNode = curr;
            while (curr.next != end) {
                if (max < curr.next.value) {
                    maxNode = curr.next;
                    max = curr.next.value;
                }
                curr = curr.next;
            }
            end = curr;
            if (curr.value < max) {
                temp = curr.value;
                curr.value = max;
                maxNode.value = temp;
            }
        }
    }

    insertionSort() {
        let curr, stop;
        let temp;

        if (this.head == null || this.head.next == null) {
            return;
        }

        stop = this.head.next;
        while (stop != null) {
            curr = this.head;
            while (curr != stop) {
                if (curr.value > stop.value) {
                    temp = curr.value;
                    curr.value = stop.value;
                    stop.value = temp;
                }
                curr = curr.next;
            }
            stop = stop.next;
        }
    }
}

// Testing code.
function main1() {
    const ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();

    console.log("Size : " + ll.size());
	console.log("Size : " + ll.findLength());
	console.log("Is empty : " + ll.isEmpty());
	console.log("Peek : " + ll.peek());
	ll.addTail(4);
	ll.print();
}

main1();
/*
3 2 1 
Size : 3
Size : 3
Is empty : false
Peek : 3
3 2 1 4 
*/
function main2() {
	const ll = new LinkedList();
	ll.addHead(1);
	ll.addHead(2);
	ll.addHead(3);
	ll.print();
	console.log("search : " + ll.find(2));
	ll.removeHead();
	ll.print();
}
main2();

function main3() {
	const ll = new LinkedList();
	ll.addHead(1);
	ll.addHead(2);
	ll.addHead(1);
	ll.addHead(2);
	ll.addHead(1);
	ll.addHead(3);
	ll.print();
	console.log("deleteNode : " + ll.deleteNode(2));
	ll.print();
	console.log("deleteNodes : " + ll.deleteNodes(1));
	ll.print();
}
main3();
/*
3 1 2 1 2 1 
deleteNode : true
3 1 1 2 1 
deleteNodes : true
3 2 
*/

function main4() {
    const ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();

    ll.reverse();
    ll.print();

    ll.reverseRecurse();
    ll.print();

    const l2 = ll.copyList();
    l2.print();
    const l3 = ll.copyListReversed();
    l3.print();
}
main4();
/*
3 2 1 
1 2 3 
3 2 1 
3 2 1 
1 2 3 
*/

function main5() {
    const ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();

    const l2 = ll.copyList();
    l2.print();
    const l3 = ll.copyListReversed();
    l3.print();
    console.log("compareList : " + ll.compareList(l2));
	console.log("compareList2 : " + ll.compareList2(l2));
	console.log("compareList : " + ll.compareList(l3));
	console.log("compareList2 : " + ll.compareList2(l3));
}
main5();
/*
3 2 1 
3 2 1 
1 2 3 
compareList : true
compareList : true
compareList : false
compareList : false
*/

function main6() {
    const ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    console.log(ll.nthNodeFromBeginning(2));
    console.log(ll.nthNodeFromEnd(2));
    console.log(ll.nthNodeFromEnd2(2));
}
main6();
/*
3 2 1 
2
2
2
*/

function main7() {
	const ll = new LinkedList();
	ll.sortedInsert(1);
	ll.sortedInsert(2);
	ll.sortedInsert(3);
	ll.sortedInsert(1);
	ll.sortedInsert(2);
	ll.sortedInsert(3);
	ll.print();
	ll.removeDuplicate();
	ll.print();
}
main7();
/*
1 1 2 2 3 3 
1 2 3
*/

function main8() {
    const ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();
    ll.makeLoop();
    ll.loopDetect();
    ll.reverseListLoopDetect();
    ll.loopTypeDetect();
    ll.removeLoop();
    ll.loopDetect();
}
main8();
/*
3 2 1 
loop found
circular list loop found
loop not found
*/

function main9() {
    const ll = new LinkedList();
    ll.addHead(1);
    ll.addHead(2);
    const ll2 = new LinkedList();
    ll2.addHead(3);
    ll2.head.next = ll.head;
    ll.addHead(4);
    ll2.addHead(5);
    ll.print();
    ll2.print();

    const nd = ll.findIntersection(ll2);
    if (nd != null)
        console.log("Intersection:: " + nd.value);
}
main9();
/*
4 2 1 
5 3 2 1 
Intersection:: 2
*/

function main10() {
	const ll = new LinkedList();
	ll.addHead(1);
	ll.addHead(10);
	ll.addHead(9);
	ll.addHead(7);
	ll.addHead(2);
	ll.addHead(3);
	ll.addHead(5);
	ll.addHead(4);
	ll.addHead(6);
	ll.addHead(8);
	ll.print();
    ll.bubbleSort();
    ll.print();
    ll.selectionSort();
    ll.print();
    ll.insertionSort();
    ll.print();
}

main10();

