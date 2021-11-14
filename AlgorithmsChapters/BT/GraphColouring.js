function printSolution(colour, V)
{
	console.log("Assigned colours are :", colour);
}

// Check if the whole graph is coloured properly.
function isSafe2(graph, colour, V)
{
	for (let i = 0; i < V; i++)
	{
		for (let j = i + 1; j < V; j++)
		{
			if (graph[i][j] && colour[j] == colour[i])
			{
				return false;
			}
		}
	}
	return true;
}

function graphColouring2Util(graph, V, m, colour, i)
{
	if (i == V)
	{
		if (isSafe2(graph, colour, V))
		{
			printSolution(colour, V);
			return true;
		}
		return false;
	}
	// Assign each colour from 1 to m
	for (let j = 1; j <= m; j++)
	{
		colour[i] = j;
		if (graphColouring2Util(graph, V, m, colour, i + 1))
		{
			return true;
		}
	}
	return false;
}

function graphColouring2(graph, V, m)
{
	let colour = new Array(V);
	if (graphColouring2Util(graph, V, m, colour, 0))
	{
		return true;
	}
	return false;
}

// Is it safe to colour vth vertice with c colour.
function isSafe(graph, V, colour, v, c)
{
	for (let i = 0; i < V; i++)
	{
		if (graph[v][i] == true && c == colour[i])
		{
			return false;
		}
	}
	return true;
}

function graphColouringUtil(graph, V, m, colour, i)
{
	if (i == V)
	{
		printSolution(colour, V);
		return true;
	}
	for (let j = 1; j <= m; j++)
	{
		if (isSafe(graph, V, colour, i, j))
		{
			colour[i] = j;
			if (graphColouringUtil(graph, V, m, colour, i + 1))
			{
				return true;
			}
		}
	}
	return false;
}

function graphColouring(graph, V, m)
{
	let colour = Array(V).fill(0);
	if (graphColouringUtil(graph, V, m, colour, 0))
	{
		return true;
	}
	return false;
}


let graph = [
	[false, true, false, false, true],
	[true, false, true, false, true],
	[false, true, false, true, true],
	[false, false, true, false, true],
	[true, true, true, true, false]
];
let V = 5; // Number of vertices
let m = 4; // Number of colours
if (! graphColouring2(graph, V, m))
{
	console.log("Solution does not exist");
}
if (! graphColouring(graph, V, m))
{
	console.log("Solution does not exist");
}
