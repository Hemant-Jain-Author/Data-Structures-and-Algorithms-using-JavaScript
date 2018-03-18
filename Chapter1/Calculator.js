class Calculator {
    constructor(data) {
        if (typeof data === 'number') {
            this.value = data;
        }
        else if (data === undefined || data === null) {
            this.value = 0;
        }
        else
            throw new Error('invalid overload');
    }

    reset() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }

    add(data) {
        this.value = this.value + data;
    }

    increment() {
        this.value += 1;
    }

    subtract(data) {
        this.value = this.value - data;
    }

    decrement() {
        this.value -= 1;
    }
}