function minCoins(coins, n, val) { // Greedy may be wrong.
    if (val <= 0)
        return 0;

    let count = 0;
    coins.sort(function(a, b){return a - b;});
    for (let i = n-1; i >= 0 && val > 0;) {
        if (coins[i] <= val) {
            count++;
            val -= coins[i];
        } else {
            i--;
        }
    }
    return (val == 0) ? count : -1;
}

function minCoins2(coins, n, val) { // Brute force.
    if (val == 0)
        return 0;

    let count = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        if (coins[i] <= val) {
            let subCount = minCoins2(coins, n, val - coins[i]);
            if (subCount >= 0)
                count = Math.min(count, subCount + 1);
        }
    }
    return (count != Number.MAX_VALUE) ? count : -1;
}

function minCoinsTD(coins, n, val) { // DP top down approach.
    const count = new Array(val + 1);
    count.fill(Number.MAX_VALUE);
    return minCoinsTDUtil(count, coins, n, val);
}

function minCoinsTDUtil(count, coins, n, val) {
    // Base Case
    if (val == 0)
        return 0;

    if (count[val] != Number.MAX_VALUE)
        return count[val];

    // Recursion
    for (let i = 0; i < n; i++) {
        if (coins[i] <= val) {
            // check validity of a sub-problem
            let subCount = minCoinsTDUtil(count, coins, n, val - coins[i]);
            if (subCount != Number.MAX_VALUE)
                count[val] = Math.min(count[val], subCount + 1);
        }
    }
    return count[val];
}

function minCoinsBU(coins, n, val) { // count bottom up approach.
    const count = new Array(val + 1);
    count.fill(Number.MAX_VALUE);
    count[0] = 0; // Base value.
    for (let i = 1; i <= val; i++) {
        for (let j = 0; j < n; j++) {
            if (coins[j] <= i && count[i - coins[j]] !== Number.MAX_VALUE && count[i] > count[i - coins[j]] + 1)             
            {
                count[i] = count[i - coins[j]] + 1;
            }
        }
    }

    if (count[val] == Number.MAX_VALUE)
        return -1;
    
    return count[val];
}

function minCoinsBU2(coins, n, val) { // DP bottom up approach.
    const count = new Array(val + 1);
    count.fill(Number.MAX_VALUE);
    const cvalue = new Array(val + 1);
    cvalue.fill(Number.MAX_VALUE);
    
    count[0] = 0; // Base value.
    for (let i = 1; i <= val; i++) {
        for (let j = 0; j < n; j++) {
            if (coins[j] <= i && count[i - coins[j]] !== Number.MAX_VALUE && count[i] > count[i - coins[j]] + 1)             
            {
                count[i] = count[i - coins[j]] + 1;
                cvalue[i] = coins[j];
            }
        }
    }

    if (count[val] == Number.MAX_VALUE)
        return -1;
    
    printCoins(cvalue, val);
    return count[val];
}

function printCoinsUtil(cvalue, val) {
    if (val > 0) {
        const ret = printCoinsUtil(cvalue, val - cvalue[val]);
        return ret + cvalue[val] + " ";
    }
    return "";
}

function printCoins(cvalue, val) {
    var ret = printCoinsUtil(cvalue, val);
    console.log("Coins are : " + ret);
}

/* Testing Code */
const coins = [5, 6];
const value = 16;
const n = coins.length;
console.log("Count is : " + minCoins(coins, n, value));
console.log("Count is : " + minCoins2(coins, n, value));
console.log("Count is : " + minCoinsBU(coins, n, value));
console.log("Count is : " + minCoinsBU2(coins, n, value));
console.log("Count is : " + minCoinsTD(coins, n, value));

/*
Count is : -1
Count is : 3
Count is : 3
Coins are : 6 5 5 
Count is : 3
Count is : 3
*/

