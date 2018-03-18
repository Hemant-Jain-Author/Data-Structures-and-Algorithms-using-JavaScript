function less(value1, value2) {
    return value1 < value2;
};
function more(value1, value2) {
    return value1 > value2;
};
function SelectionSort(arr) {
    const size = arr.length;
    let max;
    let temp;
    for (let i = 0; i < size - 1; i++) {
        max = 0;
        for (let j = 1; j < size - 1 - i; j++) {
            if (arr[j] > arr[max]) {
                max = j;
            }
        }
        temp = arr[size - 1 - i];
        arr[size - 1 - i] = arr[max];
        arr[max] = temp;
    }
};
function SelectionSort2(arr) {
    const size = arr.length;
    let min;
    let temp;
    for (let i = 0; i < size - 1; i++) {
        min = i;
        for (let j = i + 1; j < size; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
};

const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
SelectionSort(array);
console.log(array);
const array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
SelectionSort2(array2);
console.log(array2);