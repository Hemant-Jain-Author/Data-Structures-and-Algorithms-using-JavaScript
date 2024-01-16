function countSort(arr, lowerRange, upperRange) {
	let i = 0, j = 0;
	let size = arr.length;
	let range = upperRange - lowerRange;
	let count = Array(range).fill(0);
	for (i = 0; i < size; i++) {
		count[arr[i] - lowerRange]++;
	}
	for (i = 0; i < range; i++) {
		for (; count[i] > 0; count[i]--) {
			arr[j++] = i + lowerRange;
		}
	}
}

// Testing code.
let array = [23, 24, 22, 21, 26, 25, 27, 28, 21, 21];
countSort(array, 20, 30);
console.log(JSON.stringify(array));

/*
[21,21,21,22,23,24,25,26,27,28]

*/