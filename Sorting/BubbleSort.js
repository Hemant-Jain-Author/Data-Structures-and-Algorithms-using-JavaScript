function less(value1, value2) {
    return value1 < value2;
};

function more(value1, value2) {
    return value1 > value2;
};

function BubbleSort(array) {
    const size = array.length;
    let i;
    let j;
    let temp;
    for (i = 0; i < (size - 1) ; i++) {
        for (j = 0; j < size - i - 1; j++) {
            if (more(array[j], array[j + 1])) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Testing code
const array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
BubbleSort(array);
console.log(array);


function BubbleSort2(array) {
    const size = array.length;
    let i;
    let j;
    let temp;
    let swapped = 1;
    for (i = 0; i < (size - 1) && swapped === 1; i++) {
        swapped = 0;
        for (j = 0; j < size - i - 1; j++) {
            if (less(array[j], array[j + 1])) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = 1;
            }
        }
    }
}

// Testing code
const array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
BubbleSort2(array2);
console.log(array2);