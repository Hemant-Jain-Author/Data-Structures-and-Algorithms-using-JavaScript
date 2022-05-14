function fibonacci(n) {
    if (n < 2)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciBU2(n) {
    if (n < 2)
        return n;

    let first = 0;
    let second = 1;
    let temp = 0;

    for (let i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return temp;
}

function fibonacciBU(n) {
    if (n < 2)
        return n;
    
    const dp = Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++)
        dp[i] = dp[i-2] + dp[i-1];

    return dp[n];
}

function fibonacciTD(n) {
    const dp = Array(n+1).fill(0);
    fibonacciTDUtil(n, dp);
    return dp[n];
}

function fibonacciTDUtil(n, dp) {
    if (n < 2)
        return dp[n] = n;
    
    if (dp[n] != 0)
        return dp[n];
    
    dp[n] = fibonacciTDUtil(n-1, dp) + fibonacciTDUtil(n-2, dp);
    return dp[n];
}

/* Testing Code */
console.log(fibonacci(10));
console.log(fibonacciBU(10));
console.log(fibonacciBU2(10));
console.log(fibonacciTD(10));

/*
55
55
55
55
*/