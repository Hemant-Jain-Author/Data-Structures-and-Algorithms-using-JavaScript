function makePairs(nuts, bolts) {
	makePairsUtil(nuts, bolts, 0, nuts.length - 1);
	console.log("Matched nuts and bolts are : ", nuts, bolts);
}

// Quick sort kind of approach.
function makePairsUtil(nuts, bolts, low, high) {
	if (low < high) {
		// Choose first element of bolts array as pivot to partition nuts.
		let pivot = partition(nuts, low, high, bolts[low]);
		
		// Using nuts[pivot] as pivot to partition bolts.
		partition(bolts, low, high, nuts[pivot]);

		// Recursively lower and upper half of nuts and bolts are matched.
		makePairsUtil(nuts, bolts, low, pivot - 1);
		makePairsUtil(nuts, bolts, pivot + 1, high);
	}
}
function swap(arr, first, second) {
	let temp = arr[first];
	arr[first] = arr[second];
	arr[second] = temp;
}

// Partition method similar to quick sort algorithm.
function partition(arr, low, high, pivot) {
	let i = low;
	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			swap(arr, i, j);
			i++;
		} else if (arr[j] == pivot) {
			swap(arr, high, j);
			j--;
		}
	}
	swap(arr, i, high);
	return i;
}

// Testing code.
const nuts = [1, 2, 6, 5, 4, 3];
const bolts = [6, 4, 5, 1, 3, 2];
makePairs(nuts, bolts);

/*
Matched nuts and bolts are :  [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ]
*/