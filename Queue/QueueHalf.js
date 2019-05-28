class Queue {
    constructor() {
        this.frontIndex = 0;
        this.data = [];
    }

    add(value) {
        this.data.push(value);
    }

    remove() {
        const value = this.data[this.frontIndex];
        this.frontIndex++;
        if (this.data.length > 0 && this.frontIndex * 2 >= this.data.length) {
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

const que = new Queue();
for (var i = 0; i < 20; i++) {
	que.add(i);
}
for (var i = 0; i < 22; i++) {
	console.log(que.remove());
}