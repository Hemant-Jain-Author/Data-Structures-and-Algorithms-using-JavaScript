function more(value1, value2) {
    return value1 > value2;
};

function InsertionSort(arr) {
    const size = arr.length;
    let temp;
    let j;
    for (let i = 1; i < size; i++) {
        temp = arr[i];
        for (j = i; j > 0 && more(arr[j - 1], temp) ; j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = temp;
    }
};

// Testing code
const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
InsertionSort(array);
console.log(array);