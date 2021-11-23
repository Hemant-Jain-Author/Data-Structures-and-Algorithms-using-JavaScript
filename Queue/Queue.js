
class Queue {
    constructor() {
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {
        const value = this.arr[0];
        this.arr.shift();
        return value;
    }

    front() {
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length === 0
    }

    size() {
        return this.arr.length
    }
}

const que = new Queue();
que.add(1);
que.add(2);
que.add(3);
while (que.isEmpty() === false) {
    console.log(que.remove());
}


class Queue2 {
    constructor() {
        this.frontIndex = 0;
        this.threshold = 10;
        this.data = [];
    }

    add(value) {
        this.data.push(value);
    }

    remove() {
        const value = this.data[this.frontIndex];
        this.frontIndex++;
        if (this.frontIndex == this.threshold) {
            this.data = this.data.slice(this.frontIndex);
            this.frontIndex = 0;
        }
        return value;
    }

    isEmpty() {
        return (this.data.length - this.frontIndex) === 0;
    }

    length() {
        return (this.data.length - this.frontIndex);
    }
}

const que2 = new Queue2();
for(let i=0;i<20;i++)
    que2.add(i);

while (que2.isEmpty() === false) {
    console.log(que2.remove());
}


/*
class Queue2 {
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
        } else {
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
        } else {
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
*/