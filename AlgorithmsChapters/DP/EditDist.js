
function min(x, y, z)
{
	x = Math.min(x, y);
	return Math.min(x, z);
}

function editDist(str1, str2)
{
	let m = str1.length;
	let n = str2.length;
	return editDistUtil(str1, str2, m, n);
}

function editDistUtil(str1, str2, m, n)
{
	// If any one string is empty, then empty the other string.
	if (m == 0 || n == 0) 
	{
		return m + n;
	}
	// If last characters of both strings are same, ignore last characters.
	if (str1[m - 1] == str2[n - 1])
	{
		return editDistUtil(str1, str2, m - 1, n - 1);
	}
	// If last characters are not same, consider all three operations:
	// Insert last char of second into first.
	// Remove last char of first.
	// Replace last char of first with second.
	return 1 + min(editDistUtil(str1, str2, m, n - 1), 
	editDistUtil(str1, str2, m - 1, n), 
	editDistUtil(str1, str2, m - 1, n - 1));
}

function editDistDP(str1, str2)
{
	let m = str1.length;
	let n = str2.length;
	let dp = Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

	// Fill dp[][] in bottom up manner.
	for (let i = 0; i <= m; i++)
	{
		for (let j = 0; j <= n; j++)
		{
			// If any one string is empty, then empty the other string.
			if (i == 0 || j == 0)
			{
				dp[i][j] = (i + j);
			}
			else if (str1[i - 1] == str2[j - 1])
			{
				dp[i][j] = dp[i - 1][j - 1];
			}
			else
			{
				dp[i][j] = 1 + min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
			}
		}
	}
	return dp[m][n];
}

let str1 = "sunday";
let str2 = "saturday";
console.log(editDist(str1, str2));
console.log(editDistDP(str1, str2));