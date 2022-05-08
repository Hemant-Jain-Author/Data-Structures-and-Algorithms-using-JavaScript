greater = (value1, value2) => value1 > value2;

function shellSort(arr) {
	let n = arr.length;
	// Gap starts with n/2 and half in each iteration.
	for (let gap = parseInt(n / 2); gap > 0; gap = parseInt(gap / 2)) {
		// Do a gapped insertion sort.
		for (let i = gap; i < n; i += 1) {
			let curr = arr[i];
			// Shift elements of already sorted list to find right position for curr value.
			let j = 0;
			for (j = i; j >= gap && greater(arr[j - gap], curr); j -= gap) {
				arr[j] = arr[j - gap];
			}
			// Put current value in its correct location
			arr[j] = curr;
		}
	}
}

// Testing code.
let array = [36, 32, 11, 6, 19, 31, 17, 3];
shellSort(array);
console.log(JSON.stringify(array));

/*
[3,6,11,17,19,31,32,36]
*/