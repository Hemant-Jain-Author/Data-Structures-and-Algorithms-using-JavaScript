function bucketSort(arr, maxValue) {
	let numBucket = 5;
	bucketSortUtil(arr, maxValue, numBucket);
}

function bucketSortUtil(arr, maxValue, numBucket) {
	let length = arr.length;
	if (length == 0) {
		return;
	}
	let bucket = new Array(); // Create empty buckets

	for (let i = 0; i < numBucket; i++) {
		(bucket.push(new Array()) > 0);
	}

	let div = parseInt(Math.ceil( maxValue / numBucket));
	
	// Add elements into the buckets
	for (let i = 0; i < length; i++) {
		if (arr[i] < 0 || arr[i] > maxValue) {
			console.log("Value out of range.");
			return;
		}

		let bucketIndex = (parseInt(arr[i] / div));
		
		// Maximum value will be assigned to last bucket.
		if (bucketIndex >= numBucket)
			bucketIndex = numBucket - 1;
		bucket[bucketIndex].push(arr[i]);
	}

	// bucketSort the elements of each bucket.
	for (let i = 0; i < numBucket; i++) {
		bucket[i].sort(function(a, b){return a - b;});
	}

	// Populate output from the bucketSorted subarray.
	let index = 0, count = 0;
	for (let i = 0; i < numBucket; i++) {
		let temp = bucket[i];
		count = temp.length;
		for (let j = 0; j < count; j++) {
			arr[index++] = temp[j];
		}
	}
}

// Testing code.
let array = [1, 34, 7, 99, 5, 23, 45, 88, 77, 19, 91, 100];
let maxValue = 100;
bucketSort(array, maxValue);
console.log(JSON.stringify(array));

/*
[1,5,7,19,23,34,45,77,88,91,99,100]
*/