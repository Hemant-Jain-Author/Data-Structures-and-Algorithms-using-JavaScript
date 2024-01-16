function lis(arr) {
    const n = arr.length;
    const lis = Array(n).fill(0);
    let max = 0;
    // Populating LIS values in bottom up manner.
    for (let i = 0; i < n; i++) {
        lis[i] = 1;
        // Initialize LIS values for all indexes as 1.
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i] && lis[i] < lis[j] + 1)
                lis[i] = lis[j] + 1;
        }

        if (max < lis[i]) // Max LIS values.
            max = lis[i];
    }
    return max;
}

/* Testing Code */
const arr = [10, 12, 9, 23, 25, 55, 49, 70];
console.log("Length of lis is " + lis(arr));

/*
Length of lis is 6
*/