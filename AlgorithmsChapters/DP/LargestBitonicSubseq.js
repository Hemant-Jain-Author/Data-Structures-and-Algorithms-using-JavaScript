function lbs(arr) {
    const n = arr.length;
    const lis = Array(n).fill(1);    // Initialize LIS values for all indexes as 1.
    const lds = Array(n).fill(1);    // Initialize LDS values for all indexes as 1.
    let max = 0;
    // Populating LIS values in bottom up manner.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && lis[i] < lis[j] + 1)
                lis[i] = lis[j] + 1;
        }
    }
    // Populating LDS values in bottom up manner.
    for (let i = n-1; i > 0; i--) {
        for (let j = n-1; j > i; j--) {
            if (arr[j] < arr[i] && lds[i] < lds[j] + 1)
                lds[i] = lds[j] + 1;
        }
    }
    for (let i = 0; i < n; i++)
        max = Math.max(max, lis[i] + lds[i]-1);

    return max;
}

/* Testing Code */
const arr = [1, 6, 3, 11, 1, 9, 5, 12, 3, 14, 6, 17, 3, 19, 2, 19];
console.log("Length of lis is " + lbs(arr));

/*
Length of lis is 8
*/