function minCoins(coins, n, val) // Greedy may be wrong.
{
	if (val <= 0)
	{
		return 0;
	}
	let count = 0;
	coins.sort(function(a, b){return a - b;});
	for (let i = n - 1; i >= 0 && val > 0;)
	{
		if (coins[i] <= val)
		{
			count++;
			val -= coins[i];
		}
		else
		{
			i--;
		}
	}
	return (val == 0) ? count : -1;
}
function minCoins2(coins, n, val) // Brute force.
{
	if (val == 0)
	{
		return 0;
	}
	let count = Number.MAX_VALUE;
	for (let i = 0; i < n; i++)
	{
		if (coins[i] <= val)
		{
			let subCount = minCoins2(coins, n, val - coins[i]);
			if (subCount >= 0)
			{
				count = Math.min(count, subCount + 1);
			}
		}
	}
	return (count != Number.MAX_VALUE) ? count : -1;
}

function minCoinsTD(coins, n, val)
{
	let dp = new Array(val + 1);
	dp.fill(Number.MAX_VALUE);
	return minCoinsTDUtil(dp, coins, n, val);
}

function minCoinsTDUtil(dp, coins, n, val)
{
	// Base Case
	if (val == 0)
	{
		return 0;
	}
	if (dp[val] != Number.MAX_VALUE)
	{
		return dp[val];
	}
	// Recursion
	for (let i = 0; i < n; i++)
	{
		if (coins[i] <= val)
		{
			// check validity of a sub-problem
			let subCount = minCoinsTDUtil(dp, coins, n, val - coins[i]);
			if (subCount != Number.MAX_VALUE)
			{
				dp[val] = Math.min(dp[val], subCount + 1);
			}
		}
	}
	return dp[val];
}

function minCoinsBU(coins, n, val) // DP bottom up approach.
{
	let dp = new Array(val + 1);
	dp.fill(Number.MAX_VALUE);
	dp[0] = 0;
	// Base value.
	for (let i = 1; i <= val; i++)
	{
		for (let j = 0; j < n; j++)
		{
			// For all coins smaller than or equal to i.
			if (coins[j] <= i)
			{
				if (dp[i - coins[j]] != Number.MAX_VALUE)
				{
					dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
				}
			}
		}
	}
	return (dp[val] != Number.MAX_VALUE) ? dp[val] : -1;
}

let coins = [5, 6];
let value = 16;
let n = coins.length;
console.log("Count is:" + minCoins(coins, n, value));
console.log("Count is:" + minCoins2(coins, n, value));
console.log("Count is:" + minCoinsBU(coins, n, value));
console.log("Count is:" + minCoinsTD(coins, n, value));

let coins = [1, 5, 6, 9, 12];
let value = 15;
let n = coins.length;
console.log("Count is:" + minCoins(coins, n, value));
console.log("Count is:" + minCoins2(coins, n, value));
console.log("Count is:" + minCoinsBU(coins, n, value));
console.log("Count is:" + minCoinsTD(coins, n, value));