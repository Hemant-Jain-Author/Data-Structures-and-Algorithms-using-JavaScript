class QuickSort {
    constructor(array) {
        if (this.arr === undefined)
            this.arr = null;
        this.arr = array;
    }

    swap(arr, first, second) {
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    quickSortUtil(arr, lower, upper) {
        if (upper <= lower)
            return;

        const pivot = arr[lower];
        const start = lower;
        const stop = upper;
        while (lower < upper) {
            while ((arr[lower] <= pivot && lower < upper)) {
                lower++;
            }
            while ((arr[upper] > pivot && lower <= upper)) {
                upper--;
            }
            if (lower < upper) {
                this.swap(arr, upper, lower);
            }
        }
        this.swap(arr, upper, start);
        this.quickSortUtil(arr, start, upper - 1);
        this.quickSortUtil(arr, upper + 1, stop);
    }

    sort() {
        const size = this.arr.length;
        this.quickSortUtil(this.arr, 0, size - 1);
    }
}

const array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 10];
const m = new QuickSort(array);
m.sort();
for (let i = 0; i < array.length; i++) {
    process.stdout.write(`${array[i]} `);
}
