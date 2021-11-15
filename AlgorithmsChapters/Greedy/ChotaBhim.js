class PriorityQueue {
    constructor(cmp) {
		this.comp = cmp;
        this.length = 0;
        this.arr = [0];
    }

	proclateDown(parent) {
        const lChild = 2 * parent + 1;
        const rChild = lChild + 1;
        let child = -1;
        let temp;
        if (lChild < this.length) {
            child = lChild;
        }
        if (rChild < this.length && this.comp(this.arr[lChild], this.arr[rChild]) ) {
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
        const parent = Math.floor(child -1 / 2);
        let temp;
        if (parent < 0) {
            return;
        }
        if (this.comp(this.arr[parent], this.arr[child])) {
            temp = this.arr[child];
            this.arr[child] = this.arr[parent];
            this.arr[parent] = temp;
            this.proclateUp(parent);
        }
    }

    add(value) {
        this.arr[this.length] = value;
		this.length++;
        this.proclateUp(this.length-1);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error('Queue Empty');
        }
        const value = this.arr[0];
        this.arr[0] = this.arr[this.length-1];
        this.length--;
        this.proclateDown(0);
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
            throw new Error('Queue Empty');
        }
        return this.arr[0];
    }
}

function chotaBhim(cups)
{
	let size = cups.length;
	let time = 60;
	cups.sort(function(a, b){return b - a;});
	let total = 0, index = 0, temp = 0;
	while (time > 0)
	{
		total += cups[0];
		cups[0] = parseInt(Math.ceil(cups[0] / 2.0));
		index = 0;
		temp = cups[0];
		while (index < size - 1 && temp < cups[index + 1])
		{
			cups[index] = cups[index + 1];
			index += 1;
		}
		cups[index] = temp;
		time -= 1;
	}
	console.log("Total : " + total);
	return total;
}

function chotaBhim2(cups)
{
	let size = cups.length;
	let time = 60;
	let pq = new PriorityQueue(function(a, b) {return (a - b) < 0;});
	for (let i = 0; i < size; i++)
	{
		pq.add(cups[i]);
	}
	let total = 0;
	let value = 0;
	while (time > 0)
	{
		value = pq.remove();
		total += value;
		value = Math.ceil(value / 2.0);
		pq.add(value);
		time -= 1;
	}
	console.log("Total : " + total);
	return total;
}

let cups = [2, 1, 7, 4, 2];
chotaBhim(cups);
let cups2 = [2, 1, 7, 4, 2];
chotaBhim2(cups2);

/*
Total : 76
Total : 76
*/