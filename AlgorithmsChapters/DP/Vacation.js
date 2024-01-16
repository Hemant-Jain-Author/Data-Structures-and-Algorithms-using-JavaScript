
// days are must travel days, costs are cost of tickets.
function minCostVacation(days, costs) {
    const n = days.length;
    let max = days[n - 1];
    const dp = Array(max + 1).fill(0);
    let j = 0;
    for (let i = 1; i <= max; i++) {
        if (days[j] == i) {
            // That days is definitely travelled.
            j++;
            dp[i] = dp[i - 1] + costs[0];
            dp[i] = Math.min(dp[i], dp[Math.max(0, i - 7)] + costs[1]);
            dp[i] = Math.min(dp[i], dp[Math.max(0, i - 30)] + costs[2]);
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[max];
}

/* Testing Code */
const days = [1, 3, 5, 7, 12, 20, 30];
const costs = [2, 7, 20];
console.log("Min cost is:" + minCostVacation(days, costs));

/*
Min cost is:13
*/