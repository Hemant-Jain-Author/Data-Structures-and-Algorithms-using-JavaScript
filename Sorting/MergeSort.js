function merge(arr, tempArray, lowerIndex, middleIndex, upperIndex) {
    let lowerStart = lowerIndex;
    const lowerStop = middleIndex;
    let upperStart = middleIndex + 1;
    const upperStop = upperIndex;
    let count = lowerIndex;
    while ((lowerStart <= lowerStop && upperStart <= upperStop)) {
        if (arr[lowerStart] < arr[upperStart]) {
            tempArray[count++] = arr[lowerStart++];
        }
        else {
            tempArray[count++] = arr[upperStart++];
        }
    };
    while ((lowerStart <= lowerStop)) {
        tempArray[count++] = arr[lowerStart++];
    };
    while ((upperStart <= upperStop)) {
        tempArray[count++] = arr[upperStart++];
    };
    for (let i = lowerIndex; i <= upperIndex; i++) {
        arr[i] = tempArray[i];
    }
};

function mergeSrt(arr, tempArray, lowerIndex, upperIndex) {
    if (lowerIndex >= upperIndex) {
        return;
    }
    const middleIndex = ((lowerIndex + upperIndex) / 2 | 0);
    mergeSrt(arr, tempArray, lowerIndex, middleIndex);
    mergeSrt(arr, tempArray, middleIndex + 1, upperIndex);
    merge(arr, tempArray, lowerIndex, middleIndex, upperIndex);
};

function MergeSort(arr) {
    const size = arr.length;
    const tempArray = new Array(size);
    mergeSrt(arr, tempArray, 0, size - 1);
};

const array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 1];
MergeSort(array);
console.log(array);