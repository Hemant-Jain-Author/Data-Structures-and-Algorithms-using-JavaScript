class Queue {
    constructor() {
        this.frontIndex = 0;
        this.arr = [];
    }

    add(value) {
        this.arr.push(value);
    }

    remove() {
        const value = this.arr[this.frontIndex];
        this.frontIndex++;
        if (this.arr.length > 0 && this.frontIndex * 2 >= this.arr.length) {
            this.arr = this.arr.slice(this.frontIndex);
            this.frontIndex = 0;
        }
        return value;
    }

    isEmpty() {
        return (this.arr.length - this.frontIndex) === 0;
    }

    length() {
        return (this.arr.length - this.frontIndex);
    }
}

// Testing code.
const que = new Queue();
for (let i = 0; i < 20; i++) {
	que.add(i);
}
for (let i = 0; i < 22; i++) {
	console.log(que.remove());
}