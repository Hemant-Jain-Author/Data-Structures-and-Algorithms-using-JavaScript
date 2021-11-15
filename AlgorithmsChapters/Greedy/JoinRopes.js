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

function joinRopes(ropes, size)
{
	ropes.sort(function(a, b) { return b - a; });
	let total = 0;
	let value = 0;
	let index = 0;
	let length = size;
	while (length >= 2)
	{
		value = ropes[length - 1] + ropes[length - 2];
		total += value;
		index = length - 2;
		while (index > 0 && ropes[index - 1] < value)
		{
			ropes[index] = ropes[index - 1];
			index -= 1;
		}
		ropes[index] = value;
		length--;
	}
	console.log("Total : " + total);
	return total;
}
function joinRopes2(ropes, size)
{
	let pq = new PriorityQueue(function(a, b) { return (a - b) > 0});
	let i = 0;
	for (i = 0; i < size; i++)
	{
		pq.add(ropes[i]);
	}
	let total = 0;
	let value = 0;
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

let ropes = [4, 3, 2, 6];
joinRopes(ropes, ropes.length);
let rope2 = [4, 3, 2, 6];
joinRopes2(rope2, rope2.length);
