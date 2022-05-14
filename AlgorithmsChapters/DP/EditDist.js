
function min(x, y, z) {
    x = Math.min(x, y);
    return Math.min(x, z);
}

function editDist(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    return editDistUtil(str1, str2, m, n);
}

function editDistUtil(str1, str2, m, n) {
    // If any one string is empty, then empty the other string.
    if (m == 0 || n == 0) 
        return m + n;

    // If last characters of both strings are same, ignore last characters.
    if (str1[m-1] == str2[n-1])
        return editDistUtil(str1, str2, m-1, n-1);

    // If last characters are not same, consider all three operations:
    // 1) Insert last char of second into first.
    // 2) Remove last char of first.
    // 3) Replace last char of first with second.
    return 1 + min(editDistUtil(str1, str2, m, n-1), 
                    editDistUtil(str1, str2, m-1, n), 
                    editDistUtil(str1, str2, m-1, n-1));
}

function editDistDP(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Fill dp[][] in bottom up manner.
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            // If any one string is empty, then empty the other string.
            if (i == 0 || j == 0)
                dp[i][j] = (i + j);
            else if (str1[i-1] == str2[j-1])
                dp[i][j] = dp[i-1][j-1];
            // If last characters are not same, consider all three operations:
            // (1) Insert last char of second into first.
            // (2) Remove last char of first.
            // (3) Replace last char of first with second.
            else
                dp[i][j] = 1 + min(dp[i][j - 1], // Insert
                        dp[i - 1][j], // Remove
                        dp[i - 1][j - 1]); // Replace
        }
    }
    return dp[m][n];
}

/* Testing Code */
const str1 = "sunday";
const str2 = "saturday";
console.log("Edit distance:", editDist(str1, str2));
console.log("Edit distance:", editDistDP(str1, str2));

/*
Edit distance: 3
Edit distance: 3
*/