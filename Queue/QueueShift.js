class Queue {
    constructor() {
        this.data = [];
    }

    add(value) {
        this.data.push(value);
    }

    remove() {
        const value = this.data.shift();
        return value;
    }

    isEmpty() {
        return (this.data.length === 0);
    }

    length() {
        return this.data.length;
    }
}


const que = new Queue();
for (var i = 0; i < 20; i++) {
    que.add(i);
}
for (var i = 0; i < 22; i++) {
    console.log(que.remove());
}