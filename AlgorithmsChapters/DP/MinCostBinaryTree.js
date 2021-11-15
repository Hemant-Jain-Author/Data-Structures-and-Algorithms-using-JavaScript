function maxVal(max, i, j)
{
	if (max[i][j] != Number.MIN_VALUE)
	{
		return max[i][j];
	}
	for (let k = i; k < j; k++)
	{
		max[i][j] = Math.max(max[i][j], Math.max(maxVal(max, i, k), maxVal(max, k + 1, j)));
	}
	return max[i][j];
}

function findSumTDUtil(dp, max, i, j, arr)
{
	if (j <= i)
	{
		return 0;
	}
	if (dp[i][j] != Number.MAX_VALUE)
	{
		return dp[i][j];
	}
	for (let k = i; k < j; k++)
	{
		dp[i][j] = Math.min(dp[i][j], findSumTDUtil(dp, max, i, k, arr) +
		findSumTDUtil(dp, max, k + 1, j, arr) + maxVal(max, i, k) * maxVal(max, k + 1, j));
	}
	return dp[i][j];
}

function findSumTD(arr)
{
	let n = arr.length;
	let dp = Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
	let max = Array(n).fill(0).map(() => new Array(n).fill(Number.MIN_VALUE));
	for (let i = 0; i < n; i++)
	{
		max[i][i] = arr[i];
	}
	return findSumTDUtil(dp, max, 0, n - 1, arr);
}

function findSumBU(arr)
{
	let n = arr.length;
	let dp = Array(n).fill(0).map(() => new Array(n).fill(0));
	let max = Array(n).fill(0).map(() => new Array(n).fill(0));
	for (let i = 0; i < n; i++)
	{
		max[i][i] = arr[i];
	}
	for (let l = 1; l < n; l++)
	{
		// l is length of range.
		for (let i = 0, j = i + l; j < n; i++, j++)
		{
			dp[i][j] = Number.MAX_VALUE;
			for (let k = i; k < j; k++)
			{
				dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + max[i][k] * max[k + 1][j]);
				max[i][j] = Math.max(max[i][k], max[k + 1][j]);
			}
		}
	}
	return dp[0][n - 1];
}

let arr = [6, 2, 4];
console.log("Total cost: " + findSumTD(arr));
console.log("Total cost: " + findSumBU(arr));

/*
Total cost: 32
Total cost: 32
*/