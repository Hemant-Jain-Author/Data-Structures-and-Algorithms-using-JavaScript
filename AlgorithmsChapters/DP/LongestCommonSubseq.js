function LCSubStr(st1, st2)
{
	let X = st1.split('');
	let Y = st2.split('');
	const m = st1.length;
	const n = st2.length;
	const dp = Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // Dynamic programming array.
	const p = Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)); // For printing the substring.
	
	// Fill dp array in bottom up fashion.
	for (let i = 1; i <= m; i++)
	{
		for (let j = 1; j <= n; j++)
		{
			if (X[i - 1] == Y[j - 1])
			{
				dp[i][j] = dp[i - 1][j - 1] + 1;
				p[i][j] = 0;
			}
			else
			{
				dp[i][j] = (dp[i - 1][j] > dp[i][j - 1]) ? dp[i - 1][j] : dp[i][j - 1];
				p[i][j] = (dp[i - 1][j] > dp[i][j - 1]) ? 1 : 2;
			}
		}
	}
	PrintLCS(p, X, m, n);
	return dp[m][n];
}

function PrintLCS(p, X, i, j)
{
	if (i == 0 || j == 0)
		return;
	
	if (p[i][j] == 0)
	{
		PrintLCS(p, X, i - 1, j - 1);
		console.log(X[i - 1]);
	}
	else if (p[i][j] == 1)
	{
		PrintLCS(p, X, i - 1, j);
	}
	else
	{
		PrintLCS(p, X, i, j - 1);
	}
}

/* Testing Code */
const X = "carpenter";
const Y = "sharpener";
console.log("LCSubStr : " + LCSubStr(X, Y));

/*
a
r
p
e
n
e
r
LCSubStr : 7
*/