class Point
{
	constructor(a, b)
	{
		this.x = a;
		this.y = b;
	}
}

function closestPairBF(arr)
{
	const n = arr.length;
	let dmin = 9999999;
	let d = 0.0;
	for (let i = 0; i < n - 1; i++)
	{
		for (let j = i + 1; j < n; j++)
		{
			d = Math.sqrt((arr[i][0] - arr[j][0]) * (arr[i][0] - arr[j][0]) + (arr[i][1] - arr[j][1]) * (arr[i][1] - arr[j][1]));
			if (d < dmin)
			{
				dmin = d;
			}
		}
	}
	return dmin;
}

function distance(a, b)
{
	return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}


function stripMin(q, n, d)
{
	let min = d;
	// Find the distance between all the points in the strip. 
	// Array q is sorted according to the y axis coordinate.
	// The inner loop will run at most 6 times for each point.
	for (let i = 0; i < n; ++i)
	{
		for (let j = i + 1; j < n && (q[j].y - q[i].y) < min; ++j)
		{
			d = distance(q[i], q[j]);
			if (d < min)
			{
				min = d;
			}
		}
	}
	return min;
}

function closestPairUtil(p, start, stop, q, n)
{
	if (stop - start < 1)
	{
		return 999999;
	}
	if (stop - start == 1)
	{
		return distance(p[start], p[stop]);
	}
	// Find the middle point
	let mid = parseInt((start + stop) / 2);
	let dl = closestPairUtil(p, start, mid, q, n);
	let dr = closestPairUtil(p, mid + 1, stop, q, n);
	let d = Math.min(dl, dr);
	// Build an array strip[] that contains points whose x axis coordinate
	// in the range p[mid]-d and p[mid]+d
	// Points are already sorted according to y axis.
	let strip = Array(n).fill(null);
	let j = 0;
	for (let i = 0; i < n; i++)
	{
		if (Math.abs(q[i].x - p[mid].x) < d)
		{
			strip[j] = q[i];
			j++;
		}
	}
	// Find the closest points in strip and compare with d.
	return Math.min(d, stripMin(strip, j, d));
}

function closestPairDC(arr)
{
	const n = arr.length;
	const p = Array(n).fill(null);
	for (let i = 0; i < n; i++)
	{
		p[i] = new Point(arr[i][0], arr[i][1]);
	}
	// Sort according to x axis.
	p.sort(function xComp(s1, s2){	return (s1.x - s2.x);});
	let q = [...p];
	// Sort according to y axis.
	q.sort(function yComp(s1, s2){	return (s1.y - s2.y);});
	return closestPairUtil(p, 0, n - 1, q, n);
}

const arr = [
	[648, 896],
	[269, 879],
	[250, 922],
	[453, 347],
	[213, 17]
];
console.log("Smallest distance is:" + closestPairBF(arr));
console.log("Smallest distance is:" + closestPairDC(arr));

/*
Smallest distance is:47.01063709417264
Smallest distance is:47.01063709417264
*/
