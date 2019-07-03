class DeQueueNode {
    constructor(v) {
        this.value = 0;
        this.value = v;
        this.next = null;
        this.prev = null
    }
}

class DeQueue {
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

    peekFirst() {
        if (this.isEmpty())
            throw new Error("DeQueueEmptyError");
        return this.tail.value;
    }

    peekLast() {
        if (this.isEmpty())
            throw new Error("DeQueueEmptyError");
        return this.head.value;
    }

    addLast(value) {
        const temp = new DeQueueNode(value);
        if (this.head == null)
            this.head = this.tail = temp;
        else {
            temp.next = this.head;
            this.head.prev = temp
            this.head = temp;
        }
        this.size++;
    }

    removeLast() {
        if (this.isEmpty())
            throw new Error("DeQueueEmptyError");
        
        this.size--;
        const value = this.head.value;
        this.head = this.head.next;
        
        if(this.head !== null){
            this.head.prev = null
        } else {
            this.tail = null
        }
           
        return value;
    }



    addFirst(value) {
        const temp = new DeQueueNode(value, null);
        if (this.head == null)
            this.head = this.tail = temp;
        else {
            this.tail.next = temp;
            temp.prev = this.tail
            this.tail = temp;
        }
        this.size++;
    }

    
    removeFirst() {
        if (this.isEmpty())
            throw new Error("DeQueueEmptyError");
        
        this.size--;
        const value = this.tail.value;
        this.tail = this.tail.prev

        if(this.tail !== null){
            this.tail.next = null
        } else {
            this.head = null
        }
        return value;
    }

   
    print() {
        let temp = this.head;
        while (temp != null) {
            process.stdout.write(`${temp.value} `)
            temp = temp.next;
       };
       console.log()
    }
}

const que = new DeQueue();
que.addFirst(1);
que.addFirst(1);
que.addLast(2);
que.addLast(2);
while (que.isEmpty() === false) {
    console.log(que.removeLast());
}