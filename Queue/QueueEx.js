class Deque {
    constructor() {
        this.data = ([]);
    }

    size() {
        return this.data.length;
    }

    add(val) {
        this.data.push(val);
    }

    remove() {
        return this.data.shift();
    }

    peek() {
        return this.data[0]
    }

    peekLast() {
        return this.data[this.data.length - 1]
    }

    removeLast() {
        return this.data.pop()
    }
}

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

    peek() {
        const value = this.data[this.frontIndex];
        return value;
    }

    isEmpty() {
        return (this.data.length - this.frontIndex) === 0;
    }

    size() {
        return (this.data.length - this.frontIndex);
    }

    peekLast() {
        return this.data[this.data.length - 1]
    }
}

function CircularTour(arr, n) {
    const que = new Queue();
    let nextPump = 0;
    let prevPump;
    let count = 0;
    let petrol = 0;
    while (que.size() !== n) {
        while (petrol >= 0 && que.size() !== n) {
            que.add(nextPump);
            petrol += (arr[nextPump][0] - arr[nextPump][1]);
            nextPump = (nextPump + 1) % n;
        }
        while (petrol < 0 && que.size() > 0) {
            prevPump = que.remove();
            petrol -= (arr[prevPump][0] - arr[prevPump][1]);
        }
        count += 1;
        if (count === n)
            return -1;
    }
    if (petrol >= 0)
        return que.remove();
    else
        return -1;
}

function test1() {
    const tour = [[8, 6], [1, 4], [7, 6]];
    console.info(`Circular Tour : ${CircularTour(tour, 3)}`);
};
//test1()
/*
Circular Tour : 2
*/
function convertXY(src, dst) {
    const que = new Queue();
    const arr = new Array(100);
    let steps = 0;
    let index = 0;
    let value;
    que.add(src);
    while (que.size() !== 0) {
        value = que.remove();
        arr[index++] = value;
        if (value === dst) {
            for (let i = 0; i < index; i++) {
                process.stdout.write(`${arr[i]} `);
            }
            console.info(`Steps count :: ${steps}`);
            return steps;
        }
        steps++;
        if (value < dst)
            que.add(value * 2);
        else
            que.add(value - 1);
    }
    return -1;
}

function test2() {
    convertXY(2, 7);
};
//test2()
/*
2 4 8 7 Steps count :: 3
*/
function maxSlidingWindows(arr, size, k) {
    const que = new Deque();
    for (let i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        while (que.size() > 0 && arr[que.peekLast()] <= arr[i]) {
            que.removeLast();
        };
        que.add(i);
        if (i >= (k - 1))
            process.stdout.write(`${arr[que.peek()]} `);
    }
}

function test3() {
    const arr = [11, 2, 75, 92, 59, 90, 55];
    const k = 3;
    process.stdout.write("Max Sliding Windows : ")
    maxSlidingWindows(arr, 7, 3);
    console.log()
};
//test3()
/*
Max Sliding Windows : 75 92 92 92 90 
*/
function minOfMaxSlidingWindows(arr, size, k) {
    const que = new Queue();
    let minVal = 999999;
    for (let i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        while (que.size() > 0 && arr[que.peekLast()] <= arr[i]) {
            que.remove();
        };
        que.add(i);
        if (i >= (k - 1) && minVal > arr[que.peek()])
            minVal = arr[que.peek()];
    }
    console.info(`Min of max is :: ${minVal}`);
    return minVal;
}

function test4() {
    const arr = [11, 2, 75, 92, 59, 90, 55];
    const k = 3;
    minOfMaxSlidingWindows(arr, 7, 3);
};
//test4()
/*
Min of max is :: 75
*/
function maxOfMinSlidingWindows(arr, size, k) {
    const que = new Queue();
    let maxVal = -999999;
    for (let i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        while (que.size() > 0 && arr[que.peekLast()] >= arr[i]) {
            que.remove();
        };
        que.add(i);
        if (i >= (k - 1) && maxVal < arr[que.peek()])
            maxVal = arr[que.peek()];
    }
    console.info(`Max of min is :: ${maxVal}`);
}

function test5() {
    const arr = [11, 2, 75, 92, 59, 90, 55];
    const k = 3;
    maxOfMinSlidingWindows(arr, 7, 3);
};
//test5()
/*
Max of min is :: 59
*/
function firstNegSlidingWindows(arr, size, k) {
    const que = new Queue();
    for (let i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        if (arr[i] < 0)
            que.add(i);
        if (i >= (k - 1)) {
            if (que.size() > 0)
                process.stdout.write(`${arr[que.peek()]} `);
            else
                process.stdout.write("NAN ");
        }
    }
}

function test6() {
    const arr = [3, -2, -6, 10, -14, 50, 14, 21, 11, -2, -11, 2, 3];
    const k = 3;
    firstNegSlidingWindows(arr, 13, 3);
}

test6()

/*
-2 -2 -6 -14 -14 NAN NAN -2 -2 -2 -11 
*/
