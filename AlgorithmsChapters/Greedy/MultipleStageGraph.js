
const INF = Number.MAX_VALUE;

// Returns shortest distance from 0 to N-1.
function shortestDist(graph, n) {
	// dist[i] is going to store shortest
	// distance from node i to node n-1.
	const dist = Array(n).fill(INF);
	const path = Array(n).fill(0);
	let value = 0;
	dist[0] = 0;
	path[0] = -1;

	// Calculating shortest path for the nodes
	for (let i = 0; i < n; i++) {
		// Check all nodes of next 
		for (let j = i; j < n; j++) {
			// Reject if no edge exists
			if (graph[i][j] == INF)
				continue;

			value = graph[i][j] + dist[i];
			if (dist[j] > value) {
				dist[j] = value;
				path[j] = i;
			}
		}
	}
	value = n-1;
	let pathOut = "";
	while (value != -1) {
		pathOut = " " + value + pathOut;
		value = path[value];
	}
	pathOut = "Path is :" + pathOut;
	console.log(pathOut);
	return dist[n-1];
}

/* Testing Code */
// Graph stored in the form of an adjacency Matrix
const graph = [
	[INF, 1, 2, 5, INF, INF, INF, INF],
	[INF, INF, INF, INF, 4, 11, INF, INF],
	[INF, INF, INF, INF, 9, 5, 16, INF],
	[INF, INF, INF, INF, INF, INF, 2, INF],
	[INF, INF, INF, INF, INF, INF, INF, 18],
	[INF, INF, INF, INF, INF, INF, INF, 13],
	[INF, INF, INF, INF, INF, INF, INF, 2],
	[INF, INF, INF, INF, INF, INF, INF, INF]
];
console.log(shortestDist(graph, 8));

/*
Path is : 0 3 6 7
9
*/