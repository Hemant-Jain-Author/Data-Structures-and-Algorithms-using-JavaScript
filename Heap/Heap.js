less = (x, y) => (x - y) > 0;


more = (x, y) => (y - x) > 0;


class Heap {
    constructor(array, cmp) {
        this.comp = (typeof cmp === 'function') ? cmp : less;

        if (array === undefined || array === null) {
            this.size = 0;
            this.arr = [];
        } else if (array != null && array instanceof Array) {
            this.size = array.length;
            this.arr = array;
            for (let i = Math.floor(this.size / 2); i >= 0; i--) {
                this.proclateDown(i);
            }
        } else {
            throw new Error('invalid arguments');
        }
    }
    
    /* Other methods */

    proclateDown(parent) {
        const lChild = 2 * parent + 1;
        const rChild = lChild + 1;
        let child = -1;
        let temp;
        if (lChild <= this.size) {
            child = lChild;
        }
        if (rChild <= this.size && this.comp(this.arr[lChild], this.arr[rChild])) {
            child = rChild;
        }
        if (child !== -1 && this.comp(this.arr[parent], this.arr[child])) {
            temp = this.arr[parent];
            this.arr[parent] = this.arr[child];
            this.arr[child] = temp;
            this.proclateDown(child);
        }
    }

    proclateUp(child) {
        const parent = Math.floor((child - 1) / 2);
        if (parent < 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[child])) {
            const temp = this.arr[child];
            this.arr[child] = this.arr[parent];
            this.arr[parent] = temp;
            this.proclateUp(parent);
        }
    }

    add(value) {
        this.arr[this.size] = value;
        this.size++;
        this.proclateUp(this.size - 1);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        const value = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.proclateDown(0);
        return value;
    }

    print() {
        console.log(this.arr);
    }

    isEmpty() {
        return (this.size === 0);
    }

    length() {
        return this.size;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        return this.arr[0]
    }
}

function HeapSort(array, cmp) {
    const hp = new Heap(array, cmp);
    for (let i = 0; i < array.length; i++) {
        array[array.length - i - 1] = hp.remove();
    }
};

function test1() {
    const hp1 = new Heap()
    hp1.add(1)
    hp1.add(9)
    hp1.add(6)
    hp1.add(7)
    hp1.print()
    while (hp1.isEmpty() == false) {
        console.log(hp1.remove())
    }
}

//test1()

function test2() {
    const a = [1, 0, 2, 4, 5, 3];
    const hp = new Heap(a); // Min Heap
    hp.print();
    while (hp.isEmpty() == false) {
        console.log(hp.remove())
    }
}

//test2()

function test3() {
    const a = [1, 0, 2, 4, 5, 3];
    const hp = new Heap(a, more); // Min Heap
    hp.print();
    while (hp.isEmpty() == false) {
        console.log(hp.remove())
    }
}
//test3() 

function test4() {
    const b = [6, 5, 3, 4, 1, 2];
    HeapSort(b, more); // Increasing Order
    console.log(b);
}

//test4()

function KthSmallest(arr, size, k) {
    arr = arr.sort();
    return arr[k - 1];
};

function KthSmallest2(arr, size, k) {
    let value = 0;
    const pq = new Heap(arr);
    let i = 0;
    while (i < size && i < k) {
        value = pq.remove();
        i += 1;
    }
    return value;
};

function test5() {
    const arr = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info(`Kth Smallest :: ${KthSmallest(arr, arr.length, 3)}`);
    const arr2 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info(`Kth Smallest :: ${KthSmallest2(arr2, arr2.length, 3)}`);
};

function isMinHeap(arr) {
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

function isMaxHeap(arr) {
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


function test6() {
    const arr3 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info(`isMaxHeap :: ${isMaxHeap(arr3, arr3.length)}`);
    const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
    console.info(`isMinHeap :: ${isMinHeap(arr4, arr4.length)}`);
};

//test6()

function KSmallestProduct(arr, size, k) {
    arr = arr.sort();
    let product = 1;
    for (let i = 0; i < k; i++) {
        product *= arr[i];
    }
    return product;
};

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

function QuickSelectUtil(arr, lower, upper, k) {
    if (upper <= lower)
        return;
    const pivot = arr[lower];
    const start = lower;
    const stop = upper;
    
    while (lower < upper) {
        while (lower < upper && arr[lower] <= pivot) {
            lower++;
        }
        while (lower <= upper && arr[upper] > pivot) {
            upper--;
        }
        if (lower < upper) {
            swap(arr, upper, lower);
        }
    }
    
    swap(arr, upper, start);
    if (k < upper)
        QuickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        QuickSelectUtil(arr, upper + 1, stop, k);
};

function KSmallestProduct3(arr, size, k) {
    QuickSelectUtil(arr, 0, size - 1, k);
    let product = 1;
    for (let i = 0; i < k; i++) {
        product *= arr[i];
    }
    return product;
};

function KSmallestProduct2(arr, size, k) {
    const pq = new Heap(arr);
    let i = 0;
    let product = 1;
    while (i < size && i < k) {
        product *= pq.remove();
        i += 1;
    }
    return product;
};

function test7() {
    const arr = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info(`Kth Smallest product:: ${KSmallestProduct(arr, 8, 3)}`);
    const arr2 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info(`Kth Smallest product:: ${KSmallestProduct2(arr2, 8, 3)}`);
    const arr3 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info(`Kth Smallest product:: ${KSmallestProduct3(arr3, 8, 3)}`);
};

//test7()

function PrintLargerHalf(arr, size) {
    arr = arr.sort();
    for (let i = Math.floor(size / 2); i < size; i++) {
        process.stdout.write(`${arr[i]} `);
    }
    console.info();
};

function PrintLargerHalf2(arr, size) {
    const pq = new Heap(arr);
    for (let i = 0; i < (size / 2); i++) {
        pq.remove();
    }
    while (pq.isEmpty() === false){
            process.stdout.write(`${pq.remove()} `);
    }
    console.info();
};

function PrintLargerHalf3(arr, size) {
    QuickSelectUtil(arr, 0, size - 1, (size / 2));
    for (let i = (size / 2); i < size; i++) {
        process.stdout.write(`${arr[i]} `);
    }
    console.info();
};

function test8() {
    const arr = [8, 7, 6, 4, 7, 5, 2, 1];
    PrintLargerHalf(arr, 8);
    const arr2 = [8, 7, 6, 4, 7, 5, 2, 1];
    PrintLargerHalf2(arr2, 8);
    const arr3 = [8, 7, 6, 4, 7, 5, 2, 1];
    PrintLargerHalf3(arr3, 8);
};

//test8()

function sortK(arr, size, k) {
    const pq = new Heap();
    let i = 0;
    for (i = 0; i < k; i++) {
        pq.add(arr[i]);
    };
    const output = new Array(size);
    let index = 0;
    for (i = k; i < size; i++) {
        output[index++] = pq.remove();
        pq.add(arr[i]);
    }

    while (pq.isEmpty() === false) {
        output[index++] = pq.remove();
    };
    for (i = 0; i < size; i++) {
        arr[i] = output[i];
    }
    console.info(arr);
};

function test9() {
    const k = 3;
    const arr = [1, 5, 4, 10, 50, 9];
    const size = arr.length;
    sortK(arr, size, k);
};

//test9()

function ChotaBhim(cups, size){
    let time = 60;
    let total = 0;
    let index;
    let temp;
    cups.sort();
    
    while (time > 0) {
        total += cups[0];
        cups[0] = Math.ceil(cups[0] / 2.0);
        index = 0;
        temp = cups[0];
        while (index < size - 1 && temp < cups[index + 1]) {
            cups[index] = cups[index + 1];
            index += 1;
        }
        cups[index] = temp;
        time -= 1;
    }
    console.info(`Total : ${total}`);
    return total;
};

function ChotaBhim2(cups, size){
    let time = 60;
    let total = 0;
    let i;
    let temp;
    cups.sort();

    while (time > 0) {
        total += cups[0];
        cups[0] = Math.ceil(cups[0] / 2.0);
        i = 0;
        while (i < size - 1) {
            if (cups[i] > cups[i + 1])
                break;
            temp = cups[i];
            cups[i] = cups[i + 1];
            cups[i + 1] = temp;
            i += 1;
        }
        time -= 1;
    }
    console.info(`Total : ${total}`);
    return total;
};

function ChotaBhim3(cups, size){
    let time = 60;
    let total = 0;
    let value;
    const pq = new Heap(cups, more);

    while (time > 0) {
        value = pq.remove();
        total += value;
        value = (Math.ceil(value / 2.0));
        pq.add(value);
        time -= 1;
    }
    console.info(`Total : ${total}`);
    return total;
};

function test10(){
    const cups = [2, 1, 7, 4, 2];
    ChotaBhim(cups, cups.length);
    const cups2 = [2, 1, 7, 4, 2];
    ChotaBhim2(cups2, cups.length);
    const cups3 = [2, 1, 7, 4, 2];
    ChotaBhim3(cups3, cups.length);
};

//test10()

function JoinRopes(ropes, size) {
    ropes.sort().reverse();
    let total = 0;
    let value = 0;
    let temp;
    let index;
    let length = size;

    while (length >= 2) {
        value = ropes[length - 1] + ropes[length - 2];
        total += value;
        index = length - 2;
        while (index > 0 && ropes[index - 1] < value) {
            ropes[index] = ropes[index - 1];
            index -= 1;
        }
        ropes[index] = value;
        length--;
    }
    console.info(`Total : ${total}`);
    return total;
};

function JoinRopes2(ropes, size) {
    const pq = new Heap(ropes);
    let total = 0;
    let value = 0;

    while (pq.length() > 1) {
        value = pq.remove();
        value += pq.remove();
        pq.add(value);
        total += value;
    }
    console.info(`Total : ${total}`);
    return total;
};

function test11(){
    const ropes = [2, 1, 7, 4, 2];
    JoinRopes(ropes, ropes.length);
    const rope2 = [2, 1, 7, 4, 2];
    JoinRopes2(rope2, rope2.length);
};

//test11()

class MedianHeap {
    constructor() {
        this.minHeap = new Heap([], less);
        this.maxHeap = new Heap([], more);
    }

    insert(value) {
        if (this.maxHeap.isEmpty() === true || this.maxHeap.peek() >= value) {
            this.maxHeap.add(value);
        }
        else {
            this.minHeap.add(value);
        }
        if (this.maxHeap.length() > this.minHeap.length() + 1) {
            value = this.maxHeap.remove();
            this.minHeap.add(value);
        }
        if (this.minHeap.length() > this.maxHeap.length() + 1) {
            value = this.minHeap.remove();
            this.maxHeap.add(value);
        }
    }

    getMedian() {
        if (this.maxHeap.isEmpty() === true && this.minHeap.isEmpty() === true)
            return MAX_VALUE;
        if (this.maxHeap.length() === this.minHeap.length())
            return ((this.maxHeap.peek() + this.minHeap.peek()) / 2 | 0);
        else if (this.maxHeap.length() > this.minHeap.length())
            return this.maxHeap.peek();
        else
            return this.minHeap.peek();
    }
}

function test12(){
    const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5, 1, 9];
    const hp = new MedianHeap();
    for (let i = 0; i < 10; i++) {
        hp.insert(arr[i]);
        console.log(`Median after insertion of ${arr[i]} is  ${hp.getMedian()}`);
    }
};

//test12()