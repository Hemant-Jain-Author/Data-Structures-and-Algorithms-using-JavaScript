function maxProfit(arr) {
    let buyProfit = -arr[0]; // Buy stock profit
    let sellProfit = 0; // Sell stock profit
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let newBuyProfit = (sellProfit - arr[i] > buyProfit) ? sellProfit - arr[i] : buyProfit;
        let newSellProfit = (buyProfit + arr[i] > sellProfit) ? buyProfit + arr[i] : sellProfit;
        buyProfit = newBuyProfit;
        sellProfit = newSellProfit;
    }
    return sellProfit;
}

function maxProfitTC(arr, t) {
    let buyProfit = -arr[0];
    let sellProfit = 0;
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let newBuyProfit = ((sellProfit - arr[i]) > buyProfit) ? (sellProfit - arr[i]) : buyProfit;
        let newSellProfit = ((buyProfit + arr[i] - t) > sellProfit) ? (buyProfit + arr[i] - t) : sellProfit;
        buyProfit = newBuyProfit;
        sellProfit = newSellProfit;
    }
    return sellProfit;
}

function maxProfit2(arr) {
    const n = arr.length;
    const dp = Array(n).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = -arr[0]; // Buy stock profit
    dp[0][1] = 0; // Sell stock profit
    for (let i = 1; i < n; i++) {
        dp[i][0] = (dp[i-1][1] - arr[i] > dp[i-1][0]) ? dp[i-1][1] - arr[i] : dp[i-1][0];
        dp[i][1] = (dp[i-1][0] + arr[i] > dp[i-1][1]) ? dp[i-1][0] + arr[i] : dp[i-1][1];
    }
    return dp[n-1][1];
}

function maxProfitTC2(arr, t) {
    const n = arr.length;
    const dp = Array(n).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = -arr[0];
    dp[0][1] = 0;
    for (let i = 1; i < n; i++) {
        dp[i][0] = ((dp[i-1][1] - arr[i]) > dp[i-1][0]) ? (dp[i-1][1] - arr[i]) : dp[i-1][0];
        dp[i][1] = ((dp[i-1][0] + arr[i] - t) > dp[i-1][1]) ? (dp[i-1][0] + arr[i] - t) : dp[i-1][1];
    }
    return dp[n-1][1];
}

/* Testing Code */
const arr = [10, 12, 9, 23, 25, 55, 49, 70];
console.log("Total profit: " + maxProfit(arr));
console.log("Total profit: " + maxProfit2(arr));
console.log("Total profit: " + maxProfitTC(arr, 2));
console.log("Total profit: " + maxProfitTC2(arr, 2));

/*
Total profit: 69
Total profit: 69
Total profit: 63
Total profit: 63
*/