function BucketSort(array, lowerRange, upperRange) {
    const range = upperRange - lowerRange;
    const size = array.length;
    const count = new Array(range);
    for (let i = 0; i < range; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < size; i++) {
        count[array[i] - lowerRange]++;
    }
    let j = 0;
    for (i = 0; i < range; i++) {
        for (; count[i] > 0; (count[i])--) {
            array[j++] = i + lowerRange;
        }
    }
};

const array = [23, 24, 22, 21, 26, 25, 27, 28, 21, 21];
BucketSort(array, 20, 30);
console.log(array);