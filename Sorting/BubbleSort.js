function bubbleSort(arr, compare) {
    const size = arr.length;
    let temp;
    for (let i = 0; i < (size - 1); i++) {
        for (let j = 0; j < size - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
};

function bubbleSort2(arr, compare) {
    const size = arr.length;
    let temp;
    let swapped = 1;
    for (let i = 0; i < (size - 1) && swapped === 1; i++) {
        swapped = 0;
        for (let j = 0; j < size - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
    }
};

less = (value1, value2) => value1 < value2;

more = (value1, value2) => value1 > value2;

const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
bubbleSort(array, more);
console.log(array);

const array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
bubbleSort(array2, less);
console.log(array2);

const array3 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
bubbleSort2(array3, more);
console.log(array3);