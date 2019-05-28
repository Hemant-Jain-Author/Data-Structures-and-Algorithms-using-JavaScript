class PriorityQueue {
    constructor(array, cmp) {
        this.comp = (typeof cmp === 'function' && cmp != null) ? cmp : defaultCmp;

        if (array != null && array instanceof Array) {
            this.length = array.length;
            this.arr = [0].concat(array);
            for (let i = Math.floor(this.length / 2); i > 0; i--) {
                this.proclateDown(i);
            }
        }
        else if (array === undefined || array === null) {
            this.length = 0;
            this.arr = [0];
        }
        else
            throw new Error('Invalid arguments');
    }

    proclateDown(position) {
        const lChild = 2 * position;
        const rChild = lChild + 1;
        let small = -1;
        let temp;
        if (lChild <= this.length) {
            small = lChild;
        }
        if (rChild <= this.length && this.comp(this.arr[rChild], this.arr[lChild]) < 0) {
            small = rChild;
        }
        if (small !== -1 && this.comp(this.arr[small], this.arr[position]) < 0) {
            temp = this.arr[position];
            this.arr[position] = this.arr[small];
            this.arr[small] = temp;
            this.proclateDown(small);
        }
    }

    proclateUp(position) {
        const parent = Math.floor(position / 2);
        let temp;
        if (parent === 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[position]) < 0) {
            temp = this.arr[position];
            this.arr[position] = this.arr[parent];
            this.arr[parent] = temp;
            this.proclateUp(parent);
        }
    }

    add(value) {
        this.length++;
        this.arr[this.length] = value;
        this.proclateUp(this.length);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
        }
        const value = this.arr[1];
        this.arr[1] = this.arr[this.length];
        this.length--;
        this.proclateDown(1);
        return value;
    }

    print() {
        for (let i = 1; i <= this.length; i++) {
            console.log(` ${this.arr[i]}`);
        }
    }

    isEmpty() {
        return (this.length === 0);
    }

    size() {
        return this.length;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
        }
        return this.arr[1];
    }
}
