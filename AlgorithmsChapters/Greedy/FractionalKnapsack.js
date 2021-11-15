
class Items 
{
	constructor(w, v)
	{
		this.wt = w;
		this.cost = v;
		this.density = v / w;
	}
}

function getMaxCostFractional(wt, cost, capacity)
{
	let totalCost = 0;
	let n = wt.length;
	let itemList = Array(n).fill(null);
	for (let i = 0; i < n; i++)
	{
		itemList[i] = new Items(wt[i], cost[i]);
	}
	itemList.sort(function(a, b){return  b.density - a.density;}); // decreasing order.
	for (let i = 0; i < n; i++)
	{
		if (capacity - itemList[i].wt >= 0)
		{
			capacity -= itemList[i].wt;
			totalCost += itemList[i].cost;
		}
		else
		{
			totalCost += (itemList[i].density * capacity);
			break;
		}
	}
	return totalCost;
}

let wt = [10, 40, 20, 30];
let cost = [60, 40, 90, 120];
let capacity = 50;
let maxCost = getMaxCostFractional(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);

/*
Maximum cost obtained = 230
*/