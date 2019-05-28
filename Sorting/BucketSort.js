function bucketSort(arr, lowerRange, upperRange) {
    const range = upperRange - lowerRange;
    const size = arr.length;
    const count = new Array(range).fill(0);

    let i;
    for (i = 0; i < size; i++) {
        count[arr[i] - lowerRange]++;
    }

    j = 0;
    for (i = 0; i < range; i++) {
        for (; count[i] > 0; count[i]--) {
            arr[j++] = i + lowerRange;
        }
    }
};

const arr = [23, 24, 22, 21, 26, 25, 27, 28, 21, 21];
bucketSort(arr, 20, 30);
console.log(arr);