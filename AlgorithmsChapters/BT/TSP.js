
// Function to find the minimum weight Hamiltonian Cycle 
function tspUtil(graph, n, path, pSize, pCost, visited, ans)
{
	let curr = path[n - 1];
	if (pSize == n && graph[curr][0] > 0)
	{
		ans = Math.min(ans, pCost + graph[curr][0]);
		return ans;
	}
	for (let i = 0; i < n; i++)
	{
		if (visited[i] == false && graph[curr][i] > 0)
		{
			visited[i] = true;
			path[pSize] = i;
			ans = tspUtil(graph, n, path, pSize + 1, pCost + graph[curr][i], visited, ans);
			visited[i] = false;
		}
	}
	return ans;
}

function tsp(graph, n)
{
	let visited = Array(n).fill(false);
	let path = Array(n).fill(0);
	path[0] = 0;
	visited[0] = true;
	let ans = Number.MAX_VALUE;
	ans = tspUtil(graph, n, path, 1, 0, visited, ans);
	console.log(ans);
	return ans;
}

let n = 4;
let graph = [
	[0, 10, 15, 20],
	[10, 0, 35, 25],
	[15, 35, 0, 30],
	[20, 25, 30, 0]
];
tsp(graph, n);
