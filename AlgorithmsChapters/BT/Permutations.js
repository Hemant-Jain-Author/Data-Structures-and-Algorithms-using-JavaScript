function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function permutation(arr, i, length) {
	if (length == i) {
		console.log(arr);
		return;
	}
	for (let j = i; j < length; j++) {
		swap(arr, i, j);
		permutation(arr, i + 1, length);
		swap(arr, i, j);
	}
	return;
}

function isValid(arr, n) {
	for (let j = 1; j < n; j++) {
		if (Math.abs(arr[j] - arr[j - 1]) < 2) {
			return false;
		}
	}
	return true;
}

function permutation2(arr, i, length) {
	if (length == i) {
		if (isValid(arr, length)) {
			console.log(arr);
		}
		return;
	}
	for (let j = i; j < length; j++) {
		swap(arr, i, j);
		permutation2(arr, i + 1, length);
		swap(arr, i, j);
	}
	return;
}
function isValid2(arr, i) {
	if (i < 1 || Math.abs(arr[i] - arr[i - 1]) >= 2) {
		return true;
	}
	return false;
}
function permutation3(arr, i, length) {
	if (length == i) {
		console.log(arr);
		return;
	}
	for (let j = i; j < length; j++) {
		swap(arr, i, j);
		if (isValid2(arr, i)) {
			permutation3(arr, i + 1, length);
		}
		swap(arr, i, j);
	}
	return;
}
/* Testing code */
const arr = [1, 2, 3, 4]
permutation(arr, 0, 4);
permutation2(arr, 0, 4);
permutation3(arr, 0, 4);

/*
[ 1, 2, 3, 4 ]
[ 1, 2, 4, 3 ]
....
[ 4, 1, 3, 2 ]
[ 4, 1, 2, 3 ]

[ 2, 4, 1, 3 ]
[ 3, 1, 4, 2 ]

[ 2, 4, 1, 3 ]
[ 3, 1, 4, 2 ]
*/