class rmqST
{
	constructor(input) {
		this.n = input.length; // Height of segment tree.
		let x = parseInt(Math.ceil(Math.log(this.n) / Math.log(2))); //Maximum size of segment tree
		let maxSize = 2 * parseInt(Math.pow(2, x)) - 1; // Allocate memory for segment tree
		this.segArr = Array(maxSize).fill(0);
		this.constructST(input, 0, this.n - 1, 0);
	}

	constructST(input, start, end, index) {
		// Store it in current node of the segment tree and return
		if (start == end) {
			this.segArr[index] = input[start];
			return input[start];
		}
		// If there are more than one elements, 
		// then traverse left and right subtrees 
		// and store the minimum of values in current node.
		let mid = parseInt((start + end) / 2);
		this.segArr[index] = Math.min(this.constructST(input, start, mid, index * 2 + 1), this.constructST(input, mid + 1, end, index * 2 + 2));
		return this.segArr[index];
	}


	getMin(start, end) {
		// Check for error conditions.
		if (start > end || start < 0 || end > this.n - 1) {
			console.log("Invalid Input.");
			return Number.MAX_VALUE;
		}
		return this.getMinUtil(0, this.n - 1, start, end, 0);
	}

	getMinUtil(segStart, segEnd, queryStart, queryEnd, index) {
		if (queryStart <= segStart && segEnd <= queryEnd) {
			// complete overlapping case.
			return this.segArr[index];
		}
		if (segEnd < queryStart || queryEnd < segStart) {
			// no overlapping case.
			return Number.MAX_VALUE;
		}
		// Segment tree is partly overlaps with the query range.
		let mid = parseInt((segStart + segEnd) / 2);
		return Math.min(this.getMinUtil(segStart, mid, queryStart, queryEnd, 2 * index + 1), this.getMinUtil(mid + 1, segEnd, queryStart, queryEnd, 2 * index + 2));
	}

	update(ind, val) {
		// Check for error conditions.
		if (ind < 0 || ind > this.n - 1) {
			console.log("Invalid Input.");
			return;
		}
		// Update the values in segment tree
		this.updateUtil(0, this.n - 1, ind, val, 0);
	}

	// Always min inside valid range will be returned.
	updateUtil(segStart, segEnd, ind, val, index) {
		// Update index lies outside the range of current segment.
		// So minimum will not change.
		if (ind < segStart || ind > segEnd) {
			return this.segArr[index];
		}
		// If the input index is in range of this node, then update the
		// value of the node and its children
		if (segStart == segEnd) {
			if (segStart == ind) {
				// Index value need to be updated.
				this.segArr[index] = val;
				return val;
			} else {
				return this.segArr[index];
			}
		}
		let mid = parseInt((segStart + segEnd) / 2);
		// Current node value is updated with min. 
		this.segArr[index] = Math.min(this.updateUtil(segStart, mid, ind, val, 2 * index + 1), this.updateUtil(mid + 1, segEnd, ind, val, 2 * index + 2));
		// Value of diff is propagated to the parent node.
		return this.segArr[index];
	}
}

// Testing code.
let arr = [2, 3, 1, 7, 12, 5];
let tree = new rmqST(arr);
console.log("Min value in the range(1, 5): " + tree.getMin(1, 5));
console.log("Min value of all the elements: " + tree.getMin(0, arr.length - 1));
tree.update(2, -1);
console.log("Min value in the range(1, 5): " + tree.getMin(1, 5));
console.log("Min value of all the elements: " + tree.getMin(0, arr.length - 1));
tree.update(5, -2);
console.log("Min value in the range(0, 4): " + tree.getMin(0, 4));
console.log("Min value of all the elements: " + tree.getMin(0, arr.length - 1));

/*
Min value in the range(1, 5): 1
Min value of all the elements: 1
Min value in the range(1, 5): -1
Min value of all the elements: -1
Min value in the range(0, 4): -1
Min value of all the elements: -2
*/