function getMaxCost01(wt, cost, capacity)
{
	let n = wt.length;
	return getMaxCost01Util(wt, cost, n, capacity);
}

function getMaxCost01Util(wt, cost, n, capacity)
{
	// Base Case
	if (n == 0 || capacity == 0)
	{
		return 0;
	}
	// Return the maximum of two cases:
	// (1) nth item is included
	// (2) nth item is not included
	let first = 0;
	if (wt[n - 1] <= capacity)
	{
		first = cost[n - 1] + getMaxCost01Util(wt, cost, n - 1, capacity - wt[n - 1]);
	}
	let second = getMaxCost01Util(wt, cost, n - 1, capacity);
	return Math.max(first, second);
}

function getMaxCost01TD(wt, cost, capacity)
{
	const n = wt.length;
	const dp = Array(capacity + 1).fill(0).map(() => new Array(n + 1).fill(0));
	return getMaxCost01TDUtil(dp, wt, cost, n, capacity);
}

function getMaxCost01TDUtil(dp, wt, cost, i, w)
{
	if (w == 0 || i == 0)
		return 0;
	
	if (dp[w][i] != 0)
		return dp[w][i];
	
	// Their are two cases:
	// (1) ith item is included
	// (2) ith item is not included
	let first = 0;
	if (wt[i - 1] <= w)
	{
		first = getMaxCost01TDUtil(dp, wt, cost, i - 1, w - wt[i - 1]) + cost[i - 1];
	}
	let second = getMaxCost01TDUtil(dp, wt, cost, i - 1, w);
	return dp[w][i] = Math.max(first, second);
}

function getMaxCost01BU(wt, cost, capacity)
{
	const n = wt.length;
	const dp = Array(capacity + 1).fill(0).map(() => new Array(n + 1).fill(0));
	// Build table dp[][] in bottom up approach.
	// Weights considered against capacity.
	for (let w = 1; w <= capacity; w++)
	{
		for (let i = 1; i <= n; i++)
		{
			// Their are two cases:
			// (1) ith item is included
			// (2) ith item is not included
			let first = 0;
			if (wt[i - 1] <= w)
			{
				first = dp[w - wt[i - 1]][i - 1] + cost[i - 1];
			}
			let second = dp[w][i - 1];
			dp[w][i] = Math.max(first, second);
		}
	}
	//printItems(dp, wt, cost, n, capacity);
	return dp[capacity][n];
}

function printItems(dp, wt, cost, n, capacity)
{
	let totalCost = dp[capacity][n];
	console.log("Selected items are:");
	for (let i = n - 1; i > 0; i--)
	{
		if (totalCost != dp[capacity][i - 1])
		{
			console.log(" (" + wt[i] + "," + cost[i] + ")");
			capacity -= wt[i];
			totalCost -= cost[i];
		}
	}
}

function KS01UnboundBU(wt, cost, capacity)
{
	const n = wt.length;
	const dp = Array(capacity + 1).fill(0);
	// Build table dp[] in bottom up approach.
	// Weights considered against capacity.
	for (let w = 1; w <= capacity; w++)
	{
		for (let i = 1; i <= n; i++)
		{
			// Their are two cases:
			// (1) ith item is included 
			// (2) ith item is not included
			if (wt[i - 1] <= w)
			{
				dp[w] = Math.max(dp[w], dp[w - wt[i - 1]] + cost[i - 1]);
			}
		}
	}
	//printItems(dp, wt, cost, n, capacity);
	return dp[capacity];
}

/* Testing Code */
const wt = [10, 40, 20, 30];
const cost = [60, 40, 90, 120];
const capacity = 50;
let maxCost = getMaxCost01(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);
maxCost = getMaxCost01BU(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);
maxCost = getMaxCost01TD(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);

/*
Maximum cost obtained = 210
Maximum cost obtained = 210
Maximum cost obtained = 210
*/