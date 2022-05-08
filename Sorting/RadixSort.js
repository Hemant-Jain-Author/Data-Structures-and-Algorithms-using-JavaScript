function getMax(arr, n) {
	let max = arr[0];
	for (let i = 1; i < n; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

function countSort(arr, n, dividend) {
	let temp = [...arr]; // Clone array
	let count = Array(10).fill(0);
	// Store count of occurrences in count array.
	// (number / dividend) % 10 is used to find the working digit.
	for (let i = 0; i < n; i++) {
		count[(parseInt(temp[i] / dividend)) % 10]++;
	}
	// Change count[i] so that count[i] contains 
	// number of elements till index i in output.
	for (let i = 1; i < 10; i++) {
		count[i] += count[i - 1];
	}
	// Copy content to input arr.
	for (let i = n - 1; i >= 0; i--) {
		arr[count[(parseInt(temp[i] / dividend)) % 10] - 1] = temp[i];
		count[(parseInt(temp[i] / dividend)) % 10]--;
	}
}

function radixSort(arr) {
	let n = arr.length;
	let m = getMax(arr, n);
	// Counting sort for every digit.
	// The dividend passed is used to calculate current working digit.
	for (let div = 1; parseInt(m / div) > 0; div *= 10) {
		countSort(arr, n, div);
	}
}

// Testing code.
let array = [100, 49, 65, 91, 702, 29, 4, 55];
radixSort(array);
console.log(JSON.stringify(array));

/*
[4,29,49,55,65,91,100,702]
*/