class ArrayDemo {
    constructor() {
        this.numbers = new Array(100);
    }

    addValue(index, data) {
        this.numbers[index] = data;
    }

    getValue(index) {
        return this.numbers[index];
    }
}



const d = new ArrayDemo();
d.addValue(0, 1);
d.addValue(1, 2);
console.log(d.getValue(0));
console.log(d.getValue(1));