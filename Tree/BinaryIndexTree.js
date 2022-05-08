class BinaryIndexTree
{
	constructor(arr) {
		this.size = arr.length;
		this.BIT = Array(this.size + 1).fill(0);
		// Populating bit. 
		for (let i = 0; i < this.size; i++) {
			this.update(i, arr[i]);
		}
	}

	set(arr, index, val) {
		let diff = val - arr[index];
		arr[index] = val;
		// Difference is propagated.
		this.update(index, diff);
	}

	update(index, val) {
		// Index in bit is 1 more than the input array.
		index = index + 1;
		// Traverse to ancestors of nodes.
		while (index <= this.size) {
			// Add val to current node of Binary Index Tree.
			this.BIT[index] += val;
			// Next element which need to store val.
			index += index & (-index);
		}
	}

	// Range sum in the range start to end.
	rangeSum(start, end) {
		// Check for error conditions.
		if (start > end || start < 0 || end > this.size - 1) {
			console.log("Invalid Input.");
			return -1;
		}
		return this.prefixSum(end) - this.prefixSum(start - 1);
	}

	// Prefix sum in the range 0 to index.
	prefixSum(index) {
		let sum = 0;
		index = index + 1;
		// Traverse ancestors of Binary Index Tree nodes.
		while (index > 0) {
			// Add current element to sum.
			sum += this.BIT[index];
			// Parent index calculation.
			index -= index & (-index);
		}
		return sum;
	}
}

// Testing code.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let tree = new BinaryIndexTree(arr);
console.log("Sum of elements in range(0, 5): " + tree.prefixSum(5));
console.log("Sum of elements in range(2, 5): " + tree.rangeSum(2, 5));
// Set fourth element to 10.
tree.set(arr, 3, 10);
// Find sum after the value is updated
console.log("Sum of elements in range(0, 5): " + tree.prefixSum(5));

/*
Sum of elements in range(0, 5): 21
Sum of elements in range(2, 5): 18
Sum of elements in range(0, 5): 27
*/