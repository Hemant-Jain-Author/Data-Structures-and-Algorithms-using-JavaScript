
less = (value1, value2) => value1 < value2;

more = (value1, value2) => value1 > value2;

swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function quickSortUtil(arr, lower, upper) {
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
    quickSortUtil(arr, start, upper - 1);
    quickSortUtil(arr, upper + 1, stop);
};

function quickSort(arr) {
    const size = arr.length;
    quickSortUtil(arr, 0, size - 1);
};

const array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 1];
quickSort(array);
console.log(array);