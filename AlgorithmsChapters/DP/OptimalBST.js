function optCostUtil(freq, i, j) {
    if (i > j)
        return 0;

    if (j == i) // one element in this subarray
        return freq[i];
    
    let min = Number.MAX_VALUE;
    for (let r = i; r <= j; r++) {
        min = Math.min(min, optCostUtil(freq, i, r-1) + optCostUtil(freq, r+1, j));
    }
    return min + sum(freq, i, j);
}

function optCost(keys, freq) {
    const n = freq.length;
    return optCostUtil(freq, 0, n-1);
}

function optCostTD(keys, freq) {
    const n = freq.length;
    const cost = Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
    for (let i = 0; i < n; i++) {
        cost[i][i] = freq[i];
    }
    return optCostTDUtil(freq, cost, 0, n-1);
}

function optCostTDUtil(freq, cost, i, j) {
    if (i > j)
        return 0;

    if (cost[i][j] != Number.MAX_VALUE)
        return cost[i][j];

    let s = sum(freq, i, j);
    for (let r = i; r <= j; r++) {
        cost[i][j] = Math.min(cost[i][j], optCostTDUtil(freq, cost, i, r-1) + 
        optCostTDUtil(freq, cost, r+1, j) + s);
    }
    return cost[i][j];
}

function sum(freq, i, j) {
    let s = 0;
    for (let k = i; k <= j; k++)
        s += freq[k];
    return s;
}

function sumInit(freq, n) {
    const sum = Array(n).fill(0);
    sum[0] = freq[0];
    for (let i = 1; i < n; i++)
        sum[i] = sum[i-1] + freq[i];
    return sum;
}

function sumRange(sum, i, j) {
    if (i == 0)
        return sum[j];
    return sum[j] - sum[i-1];
}

function optCostBU(keys, freq) {
    const n = freq.length;
    const cost = Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
    for (let i = 0; i < n; i++)
        cost[i][i] = freq[i];

    let sm = 0;
    for (let l = 1; l < n; l++) { // l is length of range.
        for (let i = 0, j = i + l; j < n; i++, j++) {
            sm = sum(freq, i, j);
            for (let r = i; r <= j; r++) {
                cost[i][j] = Math.min(cost[i][j], sm + ((r-1 >= i) ? cost[i][r-1] : 0) + ((r+1 <= j) ? cost[r+1][j] : 0));
            }
        }
    }
    return cost[0][n-1];
}

function optCostBU2(keys, freq) {
    const n = freq.length;
    const cost = Array(n).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
    let sumArr = sumInit(freq, n);
    for (let i = 0; i < n; i++)
        cost[i][i] = freq[i];

    let sm = 0;
    for (let l = 1; l < n; l++) { // l is length of range.
        for (let i = 0, j = i + l; j < n; i++, j++) {
            sm = sumRange(sumArr, i, j);
            for (let r = i; r <= j; r++) {
                cost[i][j] = Math.min(cost[i][j], sm + ((r-1 >= i) ? cost[i][r-1] : 0) + ((r+1 <= j) ? cost[r+1][j] : 0));
            }
        }
    }
    return cost[0][n-1];
}

/* Testing Code */
const keys = [9, 15, 25];
const freq = [30, 10, 40];
console.log("OBST cost:" + optCost(keys, freq));
console.log("OBST cost:" + optCostTD(keys, freq));
console.log("OBST cost:" + optCostBU(keys, freq));
console.log("OBST cost:" + optCostBU2(keys, freq));

/*
OBST cost:130
OBST cost:130
OBST cost:130
OBST cost:130
*/