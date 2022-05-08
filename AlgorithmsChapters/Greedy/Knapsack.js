
class Items {
	constructor(w, v) {
		this.wt = w;
		this.cost = v;
		this.density =v / w;
	}
}

// Approximate solution.
function getMaxCostGreedy(wt, cost, capacity) {
	let totalCost = 0;
	const n = wt.length;
	const itemList = Array(n).fill(null);
	for (let i = 0; i < n; i++)
		itemList[i] = new Items(wt[i], cost[i]);

	itemList.sort(function (a, b) { return b.density - a.density }); // Decrease Density
	for (let i = 0; i < n && capacity > 0; i++) {
		if (capacity - itemList[i].wt >= 0) {
			capacity -= itemList[i].wt;
			totalCost += itemList[i].cost;
		}
	}
	return totalCost;
}

/* Testing Code */
const wt = [10, 40, 20, 30];
const cost = [60, 40, 90, 120];
const capacity = 50;
let maxCost = getMaxCostGreedy(wt, cost, capacity);
console.log("Maximum cost obtained = " + maxCost);

/*
Maximum cost obtained = 150
*/