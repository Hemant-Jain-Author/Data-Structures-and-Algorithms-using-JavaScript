less = (value1, value2) => value1 < value2;

greater = (value1, value2) => value1 > value2;

function selectionSort(arr, compare) {
    const size = arr.length;
    let max;
    let temp;
    for (let i = 0; i < size - 1; i++) {
        max = 0;
        for (let j = 1; j < size - i; j++) {
            if (compare(arr[j], arr[max])) {
                max = j;
            }
        }
        temp = arr[size - 1 - i];
        arr[size - 1 - i] = arr[max];
        arr[max] = temp;
    }
}

function selectionSort2(arr, compare) {
    const size = arr.length;
    let min;
    let temp;
    for (let i = 0; i < size - 1; i++) {
        min = i;
        for (let j = i + 1; j < size; j++) {
            if (compare(arr[min], arr[j])) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

// Testing code.
const array = [4, 5, 3, 2, 6, 7, 1, 8, 9, 10];
selectionSort(array, greater);
console.log(JSON.stringify(array));

const array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
selectionSort2(array2, less);
console.log(JSON.stringify(array2));

/*
[1,2,3,4,5,6,7,8,9,10]
[9,8,7,6,5,4,3,2,1]
*/