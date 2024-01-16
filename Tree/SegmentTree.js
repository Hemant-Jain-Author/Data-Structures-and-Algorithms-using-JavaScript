class SegmentTree
{
	constructor(input) {
		this.size = input.length; // Height of segment tree.
		let x = parseInt(Math.ceil(Math.log(this.size) / Math.log(2))); //Maximum size of segment tree
		let max_size = 2 * parseInt(Math.pow(2, x)) - 1; // Allocate memory for segment tree
		this.segArr = Array(max_size).fill(0);
		this.constructST(input, 0, this.size - 1, 0);
	}

	constructST(input, start, end, index) {
		// Store it in current node of the segment tree and return
		if (start == end) {
			this.segArr[index] = input[start];
			return input[start];
		}
		// If there are more than one elements, 
		// then traverse left and right subtrees 
		// and store the sum of values in current node.
		let mid = parseInt((start + end) / 2);
		this.segArr[index] = this.constructST(input, start, mid, index * 2 + 1) + this.constructST(input, mid + 1, end, index * 2 + 2);
		return this.segArr[index];
	}
    
	getSum(start, end) {
		// Check for error conditions.
		if (start > end || start < 0 || end > this.size - 1) {
			console.log("Invalid Input.");
			return -1;
		}
		return this.getSumUtil(0, this.size - 1, start, end, 0);
	}

	getSumUtil(segStart, segEnd, queryStart, queryEnd, index) {
		if (queryStart <= segStart && segEnd <= queryEnd) {
			// complete overlapping case.
			return this.segArr[index];
		}
		if (segEnd < queryStart || queryEnd < segStart) {
			// no overlapping case.
			return 0;
		}
		// Segment tree is partly overlaps with the query range.
		let mid = parseInt((segStart + segEnd) / 2);
		return this.getSumUtil(segStart, mid, queryStart, queryEnd, 2 * index + 1) + this.getSumUtil(mid + 1, segEnd, queryStart, queryEnd, 2 * index + 2);
	}
	
    set(arr, ind, val) {
		// Check for error conditions.
		if (ind < 0 || ind > this.size - 1) {
			console.log("Invalid Input.");
			return;
		}
		arr[ind] = val;
		// Set new value in segment tree
		this.setUtil(0, this.size - 1, ind, val, 0);
	}
	
    // Always diff will be returned.
	setUtil(segStart, segEnd, ind, val, index) {
		// set index lies outside the range of current segment.
		// So diff to its parent node will be zero.
		if (ind < segStart || ind > segEnd) {
			return 0;
		}
		// If the input index is in range of this node, then set the
		// value of the node and its children
		if (segStart == segEnd) {
			if (segStart == ind) {
				// Index that need to be set.
				let diff = val - this.segArr[index];
				this.segArr[index] = val;
				return diff;
			} else {
				return 0;
			}
		}
		let mid = parseInt((segStart + segEnd) / 2);
		let diff = this.setUtil(segStart, mid, ind, val, 2 * index + 1) + this.setUtil(mid + 1, segEnd, ind, val, 2 * index + 2);
		// Current node value is set with diff. 
		this.segArr[index] = this.segArr[index] + diff;
		// Value of diff is propagated to the parent node.
		return diff;
	}
}

// Testing code.
let arr = [1, 2, 4, 8, 16, 32, 64];
let tree = new SegmentTree(arr);
console.log("Sum of values in the range(0, 3): " + tree.getSum(1, 3));
console.log("Sum of values of all the elements: " + tree.getSum(0, arr.length - 1));
tree.set(arr, 1, 10);
console.log("Sum of values in the range(0, 3): " + tree.getSum(1, 3));
console.log("Sum of values of all the elements: " + tree.getSum(0, arr.length - 1));

/*
Sum of values in the range(0, 3): 14
Sum of values of all the elements: 127
Sum of values in the range(0, 3): 22
Sum of values of all the elements: 135
*/