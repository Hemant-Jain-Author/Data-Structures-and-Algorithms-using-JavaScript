function fastestWayBU2(a, t, e, x, n)
{
	let f1 = Array(n).fill(0);
	let f2 = Array(n).fill(0);
	// Time taken to leave first station.
	f1[0] = e[0] + a[0][0];
	f2[0] = e[1] + a[1][0];
	// Fill the tables f1[] and f2[] using
	// bottom up approach.
	for (let i = 1; i < n; ++i)
	{
		f1[i] = Math.min(f1[i - 1] + a[0][i], f2[i - 1] + t[1][i - 1] + a[0][i]);
		f2[i] = Math.min(f2[i - 1] + a[1][i], f1[i - 1] + t[0][i - 1] + a[1][i]);
	}
	// Consider exit times and return minimum.
	return Math.min(f1[n - 1] + x[0], f2[n - 1] + x[1]);
}

function fastestWayBU(a, t, e, x, n)
{
	let f = Array(2).fill(0).map(() => new Array(n).fill(0));
	// Time taken to leave first station.
	f[0][0] = e[0] + a[0][0];
	f[1][0] = e[1] + a[1][0];
	// Fill the tables f1[] and f2[] using
	// bottom up approach.
	for (let i = 1; i < n; ++i)
	{
		f[0][i] = Math.min(f[0][i - 1] + a[0][i], f[1][i - 1] + t[1][i - 1] + a[0][i]);
		f[1][i] = Math.min(f[1][i - 1] + a[1][i], f[0][i - 1] + t[0][i - 1] + a[1][i]);
	}
	// Consider exit times and return minimum.
	return Math.min(f[0][n - 1] + x[0], f[1][n - 1] + x[1]);
}

function fastestWayTD(a, t, e, x, n)
{
	let f = Array(2).fill(0).map(() => new Array(n).fill(0));
	// Time taken to leave first station.
	f[0][0] = e[0] + a[0][0];
	f[1][0] = e[1] + a[1][0];
	fastestWayTDUtil(f, a, t, n - 1);
	return Math.min(f[0][n - 1] + x[0], f[1][n - 1] + x[1]);
}

function fastestWayTDUtil(f, a, t, i)
{
	if (i == 0)
	{
		return;
	}
	fastestWayTDUtil(f, a, t, i - 1);
	// Fill the tables f1[] and f2[] using top-down approach.
	f[0][i] = Math.min(f[0][i - 1] + a[0][i], f[1][i - 1] + t[1][i - 1] + a[0][i]);
	f[1][i] = Math.min(f[1][i - 1] + a[1][i], f[0][i - 1] + t[0][i - 1] + a[1][i]);
}
// Driver code
let a = [[7, 9, 3, 4, 8, 4],
	[8, 5, 6, 4, 5, 7]];
let t = [[2, 3, 1, 3, 4],
	[2, 1, 2, 2, 1]];
let e = [2, 4];
let x = [3, 2];
let n = 6;
console.log(fastestWayBU2(a, t, e, x, n));
console.log(fastestWayBU(a, t, e, x, n));
console.log(fastestWayTD(a, t, e, x, n));

/*
38
38
38
*/