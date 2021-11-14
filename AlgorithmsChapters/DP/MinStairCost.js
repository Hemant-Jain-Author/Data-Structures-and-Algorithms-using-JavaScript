
function minStairCost(cost, n)
{
	// base case
	if (n == 1)
		return cost[0];

	let dp = Array(n).fill(0);
	dp[0] = cost[0];
	dp[1] = cost[1];
	for (let i = 2; i < n; i++)
	{
		dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
	}
	return Math.min(dp[n - 2], dp[n - 1]);
}

let a = [1, 5, 6, 3, 4, 7, 9, 1, 2, 11];
let n = a.length;
console.log(minStairCost(a, n));
