function fibonacci(n)
{
	if (n <= 2)
		return n - 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciSeries(n)
{
	let arr = new Array(n).fill(0);
	for (let i = 1; i <= n; i++)
	{
		arr[i-1] = fibonacci(i);
	}
	console.log(arr);
}

function fibonacciBU(n)
{
	if (n <= 2)
	{
		return n - 1;
	}
	let first = 0;
	let second = 1;
	let temp = 0;
	for (let i = 2; i < n; i++)
	{
		temp = first + second;
		first = second;
		second = temp;
	}
	return temp;
}

function fibonacciSeriesBU(n)
{
	if (n < 1)
	{
		return;
	}
	let dp = Array(n).fill(0);
	dp[0] = 0;
	dp[1] = 1;
	for (let i = 2; i < n; i++)
	{
		dp[i] = dp[i - 2] + dp[i - 1];
	}
	console.log(dp);
}

function fibonacciSeriesTD(n)
{
	if (n < 1)
		return;
	let dp = Array(n).fill(0);
	fibonacciSeriesTDUtil(n - 1, dp);
	console.log(dp);
}

function fibonacciSeriesTDUtil(n, dp)
{
	if (n <= 1)
	{
		return dp[n] = n;
	}
	if (dp[n] != 0)
	{
		return dp[n];
	}
	dp[n] = fibonacciSeriesTDUtil(n - 1, dp) + fibonacciSeriesTDUtil(n - 2, dp);
	return dp[n];
}



fibonacciSeries(6);
fibonacciSeriesBU(6);
fibonacciSeriesTD(6);
console.log(fibonacci(6));
console.log(fibonacciBU(6));

/*
[ 0, 1, 1, 2, 3, 5 ]
[ 0, 1, 1, 2, 3, 5 ]
[ 0, 1, 1, 2, 3, 5 ]
5
5
*/