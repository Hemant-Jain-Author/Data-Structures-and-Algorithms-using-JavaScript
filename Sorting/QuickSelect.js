function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function quickSelectUtil(arr, lower, upper, k) {
    if (upper <= lower)
        return;

    const pivot = arr[lower];
    const start = lower;
    const stop = upper;
    while (lower < upper) {
        while (arr[lower] <= pivot && lower < upper) {
            lower++;
        };
        while (arr[upper] > pivot && lower <= upper) {
            upper--;
        };
        if (lower < upper) {
            swap(arr, upper, lower);
        }
    };
    swap(arr, upper, start);
    if (k < upper)
        quickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        quickSelectUtil(arr, upper + 1, stop, k);
};

function quickSelect(arr, k) {
    quickSelectUtil(arr, 0, arr.length - 1, k);
};

const array = [3, 4, 2, 1, 6, 5, 7, 8, 10, 9];
quickSelect(array, 5);
console.log(`Fifth value is : ${array[4]}`);