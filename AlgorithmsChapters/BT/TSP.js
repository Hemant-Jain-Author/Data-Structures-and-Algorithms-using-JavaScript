
// Function to find the minimum weight Hamiltonian Cycle 
function tspUtil(graph, n, path, pSize, pCost, visited, ans, ansPath) {
	if(pCost >= ans) // Ignore useless paths.
        return ans;

	const curr = path[pSize - 1];
	if (pSize == n) {
		let first = path[0];
		if(graph[curr][0] > 0 && ans > pCost + graph[curr][first]) {
			ans = pCost + graph[curr][first];
			for (let i = 0; i <= n; i++) {
				ansPath[i] = path[i%n];
			}
		}
		return ans;
	}
	
	for (let i = 0; i < n; i++) {
		if (visited[i] == false && graph[curr][i] > 0) {
			visited[i] = true;
			path[pSize] = i;
			ans = tspUtil(graph, n, path, pSize + 1, pCost + graph[curr][i], visited, ans, ansPath);
			visited[i] = false;
		}
	}
	return ans;
}

function tsp(graph, n) {
	const visited = Array(n).fill(false);
	const path = Array(n).fill(0);
	let ansPath = Array(n).fill(0);

	const source = 0;
	visited[source] = true;
	path[0] = source;

	let ans = Number.MAX_VALUE;
	ans = tspUtil(graph, n, path, 1, 0, visited, ans, ansPath);

	console.log("Shortest Path weight :", ans);
	console.log("Shortest Path :", ansPath);
	return ans;
}

// Testing code.
const n = 4;
const graph = [[0, 10, 15, 20],
			   [10, 0, 35, 25],
			   [15, 35, 0, 30],
			   [20, 25, 30, 0]];
tsp(graph, n);

/*
Shortest Path weight : 80
Shortest Path : [ 0, 1, 3, 2, 0 ]
*/