function feasible(Q, k)
{
	for (let i = 0; i < k; i++)
	{
		if (Q[k] == Q[i] || Math.abs(Q[i] - Q[k]) == Math.abs(i - k))
		{
			return false;
		}
	}
	return true;
}

function nQueens(Q, k, n)
{
	if (k == n)
	{
		console.log(Q);
		return;
	}
	for (let i = 0; i < n; i++)
	{
		Q[k] = i;
		if (feasible(Q, k))
		{
			nQueens(Q, k + 1, n);
		}
	}
}

let Q = new Array(8);
nQueens(Q, 0, 8);