class Queue {
    constructor() {
        this.Capacity = 1000;
        this.front = 0;
        this.back = 0;
        this.size = 0;
        this.data = new Array(this.Capacity);
    }

    add(value) {
        if (this.size >= this.Capacity) {
            console.log("Queue is full.");
            return false;
        }
        else {
            this.size++;
            this.data[this.back] = value;
            this.back = (++this.back) % (this.Capacity - 1);
        }
        return true;
    }

    remove() {
        let value;
        if (this.size <= 0) {
            console.log("Queue is empty.");
            return 0;
        }
        else {
            this.size--;
            value = this.data[this.front];
            this.front = (++this.front) % (this.Capacity - 1);
        }
        return value;
    }

    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }
}

const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
while (que.isEmpty() === false) {
    console.log(que.remove());
}