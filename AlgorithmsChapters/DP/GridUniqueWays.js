
function gridUniqueWays(m, n) {
    const dp = Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = 1;
    // Initialize first column.
    for (let i = 1; i < m; i++)
        dp[i][0] = dp[i-1][0];
    
    // Initialize first row.
    for (let j = 1; j < n; j++)
        dp[0][j] = dp[0][j-1];
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++)
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
    return dp[m-1][n-1];
}

// Diagonal movement allowed.
function gridUnique3Ways(m, n) {
    const dp = Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = 1;
    // Initialize first column.
    for (let i = 1; i < m; i++)
        dp[i][0] = dp[i-1][0];

    // Initialize first row.
    for (let j = 1; j < n; j++)
        dp[0][j] = dp[0][j-1];

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++)
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j] + dp[i][j-1];
    }
    return dp[m-1][n-1];
}

/* Testing Code */
console.log(gridUniqueWays(3, 3));
console.log(gridUnique3Ways(3, 3));

/*
6
13
*/
