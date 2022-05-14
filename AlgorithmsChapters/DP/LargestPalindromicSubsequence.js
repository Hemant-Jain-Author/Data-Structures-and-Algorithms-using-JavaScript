function palindromicSubsequence(str) {
    const n = str.length;
    const dp = Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) // each char is itself palindromic with length 1
        dp[i][i] = 1;


    for (let l = 1; l < n; l++) {
        for (let i = 0, j = l; j < n; i++, j++) {
            if (str.charAt(i) == str.charAt(j))
                dp[i][j] = dp[i + 1][j - 1] + 2;
            else
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
    }
    return dp[0][n - 1];
}

/* Testing Code */
const str = "ABCAUCBCxxCBA";
console.log("Max Palindromic Subsequence length: " + palindromicSubsequence(str));

/*
Max Palindromic Subsequence length: 9
*/