class rangeMaxST
{
	constructor(input) {
		this.n = input.length; 	// Height of segment tree.
		let x = parseInt(Math.ceil(Math.log(this.n) / Math.log(2))); //Maximum size of segment tree
		let max_size = 2 * parseInt(Math.pow(2, x)) - 1; // Allocate memory for segment tree
		this.segArr = Array(max_size).fill(0);
		this.constructST(input, 0, this.n - 1, 0);
	}

	constructST(input, start, end, index) {
		// Store it in current node of the segment tree and return
		if (start == end) {
			this.segArr[index] = input[start];
			return input[start];
		}
		// If there are more than one elements, then traverse left and right subtrees 
		// and store the minimum of values in current node.
		let mid = parseInt((start + end) / 2);
		this.segArr[index] = Math.max(this.constructST(input, start, mid, index * 2 + 1), 
                                      this.constructST(input, mid + 1, end, index * 2 + 2));
		return this.segArr[index];
	}

	getMax(start, end) {
		// Check for error conditions.
		if (start > end || start < 0 || end > this.n - 1) {
			console.log("Invalid Input.");
			return Number.MIN_VALUE;
		}
		return this.getMaxUtil(0, this.n - 1, start, end, 0);
	}

	getMaxUtil(segStart, segEnd, queryStart, queryEnd, index) {
		if (queryStart <= segStart && segEnd <= queryEnd) {
			// complete overlapping case.
			return this.segArr[index];
		}
		if (segEnd < queryStart || queryEnd < segStart) {
			// no overlapping case.
			return Number.MIN_VALUE;
		}
		// Segment tree is partly overlaps with the query range.
		let mid = parseInt((segStart + segEnd) / 2);
		return Math.max(this.getMaxUtil(segStart, mid, queryStart, queryEnd, 2 * index + 1), 
                        this.getMaxUtil(mid + 1, segEnd, queryStart, queryEnd, 2 * index + 2));
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
		this.segArr[index] = Math.max(this.updateUtil(segStart, mid, ind, val, 2 * index + 1), 
                                      this.updateUtil(mid + 1, segEnd, ind, val, 2 * index + 2));
		// Value of diff is propagated to the parent node.
		return this.segArr[index];
	}
}

// Testing code.
let arr = [1, 8, 2, 7, 3, 6, 4, 5];
let tree = new rangeMaxST(arr);
console.log("Max value in the range(1, 5): " + tree.getMax(1, 5));
console.log("Max value in the range(2, 7): " + tree.getMax(2, 7));
console.log("Max value of all the elements: " + tree.getMax(0, arr.length - 1));
tree.update(2, 9);
console.log("Max value in the range(1, 5): " + tree.getMax(1, 5));
console.log("Max value of all the elements: " + tree.getMax(0, arr.length - 1));

/*
Max value in the range(1, 5): 8
Max value in the range(2, 7): 7
Max value of all the elements: 8
Max value in the range(1, 5): 9
Max value of all the elements: 9
*/