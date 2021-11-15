
class Items
{
	constructor(w, v)
	{
		this.wt = w;
		this.cost = v;
		this.density =v / w;
	}
}

// Approximate solution.
function getMaxCostGreedy(wt, cost, capacity)
{
	let totalCost = 0;
	let n = wt.length;
	let itemList = Array(n).fill(null);
	for (let i = 0; i < n; i++)
	{
		itemList[i] = new Items(wt[i], cost[i]);
	}
	itemList.sort(function (a, b) { return b.density - a.density }); // Decrease Density
	for (let i = 0; i < n && capacity > 0; i++)
	{
		if (capacity - itemList[i].wt >= 0)
		{
			capacity -= itemList[i].wt;
			totalCost += itemList[i].cost;
		}
	}
	return totalCost;
}

let wt = [10, 40, 20, 30];
let cost = [60, 40, 90, 120];
let capacity = 50;
let maxCost = getMaxCostGreedy(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);

/*
Maximum cost obtained = 150
*/