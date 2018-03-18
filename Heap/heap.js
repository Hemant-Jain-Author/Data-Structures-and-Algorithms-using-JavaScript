class PriorityQueue {
    constructor(array, cmp) {
        this.comp = (typeof cmp === 'function') ? cmp : less;

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
            throw new Error('invalid arguments');
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
            throw new Error();
        }
        const value = this.arr[1];
        this.arr[1] = this.arr[this.length];
        this.length--;
        this.proclateDown(1);
        return value;
    }

    print() {
        console.log(this.arr);
    }

    isEmpty() {
        return (this.length === 0);
    }

    size() {
        return this.length;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error();
        }
        return this.arr[1];
    }

    static HeapSort(array, cmp) {
        const hp = new PriorityQueue(array, cmp);
        for (let i = 0; i < array.length; i++) {
            array[i] = hp.remove();
        }
    }
}

less = (x, y) => x - y;

more = (x, y) => y - x;

function IsMinHeap(arr) {
    const size = arr.length;
    const mid = Math.floor((size - 2) / 2);
    for (i = 0; i <= mid; i++) {
        if (2 * i + 1 < size) {
            if (arr[i] > arr[2 * i + 1])
                return false;
        }
        if (2 * i + 2 < size) {
            if (arr[i] > arr[2 * i + 2])
                return false;
        }
    }
    return true;
}

function IsMaxHeap(arr) {
    const size = arr.length;
    const mid = Math.floor((size - 2) / 2);

    for (i = 0; i <= mid; i++) {
        if (2 * i + 1 < size && arr[i] < arr[2 * i + 1])
            return false;

        if (2 * i + 2 < size && arr[i] < arr[2 * i + 2])
            return false;
    }
    return true;
}

const a = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
const hp = new PriorityQueue(a, less); // Min Heap
hp.print();

PriorityQueue.HeapSort(a, less); // Increasing Order
console.log(a);

const b = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
const hp2 = new PriorityQueue(b, more); // Max Heap
hp2.print();

PriorityQueue.HeapSort(b, more); // Decreasing Order
console.log(b);