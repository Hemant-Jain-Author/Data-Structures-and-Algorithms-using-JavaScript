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

function optimalMerge(lists, size)
{
	var pq = new PriorityQueue(function(a, b) { return (a - b) > 0});
	var i = 0;
	for (i = 0; i < size; i++)
	{
		pq.add(lists[i]);
	}
	var total = 0;
	var value = 0;
	while (pq.size() > 1)
	{
		value = pq.remove();
		value += pq.remove();
		pq.add(value);
		total += value;
	}
	console.log("Total : " + total);
	return total;
}

var lists = [4, 3, 2, 6];
optimalMerge(lists, lists.length);