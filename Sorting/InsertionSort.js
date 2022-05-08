function insertionSort(arr, compare) {
    const size = arr.length;
    let temp;
    for (let i = 1; i < size; i++) {
        temp = arr[i];
        for (var j = i; j > 0 && compare(arr[j - 1], temp); j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = temp;
    }
}

greater = (value1, value2) => value1 > value2;

// Testing code.
const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
insertionSort(array, greater);
console.log(JSON.stringify(array));

/*
[1,2,3,4,5,6,7,8,9]
*/