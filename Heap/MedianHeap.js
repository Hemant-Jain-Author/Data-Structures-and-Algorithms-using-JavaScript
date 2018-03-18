less = (x, y) => x - y;

more = (x, y) => y - x;

class MedianHeap {
    constructor() {
        this.minHeap = new PriorityQueue([], more);
        this.maxHeap = new PriorityQueue([], less);
    }

    insert(value) {
        if (this.maxHeap.isEmpty() === true || this.maxHeap.peek() >= value) {
            this.maxHeap.add(value);
        }
        else {
            this.minHeap.add(value);
        }
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            value = this.maxHeap.remove();
            this.minHeap.add(value);
        }
        if (this.minHeap.size() > this.maxHeap.size() + 1) {
            value = this.minHeap.remove();
            this.maxHeap.add(value);
        }
    }

    getMedian() {
        if (this.maxHeap.isEmpty() === true && this.minHeap.isEmpty() === true)
            return MAX_VALUE;
        if (this.maxHeap.size() === this.minHeap.size())
            return ((this.maxHeap.peek() + this.minHeap.peek()) / 2 | 0);
        else if (this.maxHeap.size() > this.minHeap.size())
            return this.maxHeap.peek();
        else
            return this.minHeap.peek();
    }
}

const arr = [1, 9, 2, 8, 3, 7, 4, 6, 5, 1, 9, 2, 8, 3, 7, 4, 6, 5, 10, 10];
const hp = new MedianHeap();
for (let i = 0; i < 20; i++) {
    hp.insert(arr[i]);
    console.log(`Median after insertion of ${arr[i]} is  ${hp.getMedian()}`);
}