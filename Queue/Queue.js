
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

// Testing code.
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

// Testing code.
const que2 = new Queue2();
for(let i=0;i<20;i++)
    que2.add(i);

while (que2.isEmpty() === false) {
    console.log(que2.remove());
}