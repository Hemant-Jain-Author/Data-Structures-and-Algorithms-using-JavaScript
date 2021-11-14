
function MatrixChainMulBruteForceUtil(p, i, j)
{
	if (i == j)
	{
		return 0;
	}
	let min = Number.MAX_VALUE;
	// place parenthesis at different places between
	// first and last matrix, recursively calculate
	// count of multiplications for each parenthesis
	// placement and return the minimum count
	for (let k = i; k < j; k++)
	{
		let count = MatrixChainMulBruteForceUtil(p, i, k) + 
		MatrixChainMulBruteForceUtil(p, k + 1, j) + p[i - 1] * p[k] * p[j];
		if (count < min)
		{
			min = count;
		}
	}
	// Return minimum count
	return min;
}
function MatrixChainMulBruteForce(p, n)
{
	let i = 1;
	let j = n - 1;
	return MatrixChainMulBruteForceUtil(p, i, j);
}
function MatrixChainMulTD(p, n)
{
	let dp = Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
	return MatrixChainMulTDUtil(dp, p, 1, n - 1);
}
// Function for matrix chain multiplication
function MatrixChainMulTDUtil(dp, p, i, j)
{
	// Base Case
	if (i == j)
	{
		return 0;
	}
	if (dp[i][j] != Number.MAX_VALUE)
	{
		return dp[i][j];
	}
	for (let k = i; k < j; k++)
	{
		dp[i][j] = Math.min(dp[i][j], MatrixChainMulTDUtil(dp, p, i, k) +
		 MatrixChainMulTDUtil(dp, p, k + 1, j) + p[i - 1] * p[k] * p[j]);
	}
	return dp[i][j];
}
function MatrixChainMulBU(p, n)
{
	let dp = Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));

	for (let i = 1; i < n; i++)
	{
		dp[i][i] = 0;
	}
	for (let l = 1; l < n; l++)
	{
		// l is length of range.
		for (let i = 1, j = i + l; j < n; i++, j++)
		{
			for (let k = i; k < j; k++)
			{
				dp[i][j] = Math.min(dp[i][j], dp[i][k] + p[i - 1] * p[k] * p[j] + dp[k + 1][j]);
			}
		}
	}
	return dp[1][n - 1];
}
// Driver Code
let arr = [1, 2, 3, 4];
let n = arr.length;
console.log("Matrix Chain Multiplication is: " + MatrixChainMulBruteForce(arr, n));
console.log("Matrix Chain Multiplication is: " + MatrixChainMulTD(arr, n));
console.log("Matrix Chain Multiplication is: " + MatrixChainMulBU(arr, n));
