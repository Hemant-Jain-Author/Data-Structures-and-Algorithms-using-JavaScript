
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
	var totalCost = 0;
	var n = wt.length;
	var itemList = Array(n).fill(null);
	for (var i = 0; i < n; i++)
	{
		itemList[i] = new Items(wt[i], cost[i]);
	}
	itemList.sort(function(a, b){return  b.density - a.density;}); // decreasing order.
	for (var i = 0; i < n; i++)
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

var wt = [10, 40, 20, 30];
var cost = [60, 40, 90, 120];
var capacity = 50;
var maxCost = getMaxCostFractional(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);