
function palindromicSubstring(str) {
    const n = str.length;
    const dp = Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++)
        dp[i][i] = 1;
    
    let max = 1;
    let start = 0;
    for (let l = 1; l < n; l++) {
        for (let i = 0, j = i + l; j < n; i++, j++) {
            if (str.charAt(i) == str.charAt(j) && dp[i+1][j-1] == j-i-1) {
                dp[i][j] = dp[i + 1][j-1] + 2;
                if (dp[i][j] > max) {
                    max = dp[i][j]; // Keeping track of max length 
                    start = i;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }
    console.log("Max Length Palindromic Substrings : " +str.substring(start, start + max));
    return max;
}

/* Testing Code */
const str = "ABCAUCBCxxCBA";
console.log("Max Palindromic Substrings len: " + palindromicSubstring(str));

/*
Max Length Palindromic Substrings : BCxxCB
Max Palindromic Substrings len: 6
*/