
function subsetSum(arr, n, target) {
	const flags = Array(n).fill(false);
	subsetSumUtil(arr, n, flags, 0, 0, target);
}

function subsetSumUtil(arr, n, flags, sum, curr, target) {
	if (target == sum) {
		printSubset(flags, arr, n); // Solution found.
		return;
	}
	if (curr >= n || sum > target) {
		// constraint check
		// Backtracking.
		return;
	}
	// Current element included.
	flags[curr] = true;
	subsetSumUtil(arr, n, flags, sum + arr[curr], curr + 1, target);
	// Current element excluded.
	flags[curr] = false;
	subsetSumUtil(arr, n, flags, sum, curr + 1, target);
}

function printSubset(flags, arr, size) {
	const out = [];
	for (let i = 0; i < size; i++)
		if (flags[i])
			out.push(arr[i]);
	console.log(out);
}

// Testing code.
const arr = [15, 22, 14, 26, 32, 9, 16, 8];
const target = 53;
subsetSum(arr, arr.length, target);

/*
[ 15, 22, 16 ]
[ 15, 14, 16, 8 ]
[ 22, 14, 9, 8 ]
*/