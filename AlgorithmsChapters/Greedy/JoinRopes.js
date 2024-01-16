greater = (x, y) => (x > y);
less = (x, y) => (x < y);

class PriorityQueue {
    constructor(cmp) {
		this.comp = cmp;
        this.size = 0;
        this.arr = [];
    }
    
    /* Other methods */
    percolateDown(parent) {
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
            this.percolateDown(child);
        }
    }

    percolateUp(child) {
        const parent = Math.floor((child - 1) / 2);
        if (parent < 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[child])) {
            const temp = this.arr[child];
            this.arr[child] = this.arr[parent];
            this.arr[parent] = temp;
            this.percolateUp(parent);
        }
    }

    add(value) {
        this.arr[this.size] = value;
        this.size += 1;
        this.percolateUp(this.size - 1);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("IllegalStateException");
        }
        const value = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.percolateDown(0);
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

function joinRopes(ropes, size) {
	ropes.sort(function(a, b) { return b - a; });
	let total = 0, value = 0, index = 0, length = size;
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
	console.log("Total : " + total);
	return total;
}

function joinRopes2(ropes, size) {
	const pq = new PriorityQueue(function(a, b) { return (a > b)});
	for (let i = 0; i < size; i++) {
		pq.add(ropes[i]);
	}
	let total = 0, value = 0;
	while (pq.length() > 1) {
		value = pq.remove();
		value += pq.remove();
		pq.add(value);
		total += value;
	}
	console.log("Total : " + total);
	return total;
}

/* Testing Code */
const ropes = [4, 3, 2, 6];
joinRopes(ropes, ropes.length);
const rope2 = [4, 3, 2, 6];
joinRopes2(rope2, rope2.length);

/*
Total : 29
Total : 29
*/