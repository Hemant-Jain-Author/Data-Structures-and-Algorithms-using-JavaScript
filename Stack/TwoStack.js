class TwoStack {
    constructor() {
        this.MAX_SIZE = 1000;
        this.top1 = -1;
        this.top2 = this.MAX_SIZE;
        this.data = new Array(this.MAX_SIZE);
    }

    push1(value) {
        if (this.top1 < this.top2 - 1) {
            this.data[++this.top1] = value;
        }
        else {
            console.log("Stack is Full!");
        }
    }

    push2(value) {
        if (this.top1 < this.top2 - 1) {
            this.data[--this.top2] = value;
        }
        else {
            console.log("Stack is Full!");
        }
    }

    pop1() {
        if (this.top1 >= 0) {
            const value = this.data[this.top1--];
            return value;
        }
        else {
            console.log("Stack Empty!");
        }
        return -999;
    }

    pop2() {
        if (this.top2 < this.MAX_SIZE) {
            const value = this.data[this.top2++];
            return value;
        }
        else {
            console.log("Stack Empty!");
        }
        return -999;
    }
}

const st = new TwoStack();
for (var i = 0; i < 10; i++) {
    st.push1(i);
}
for (let j = 0; j < 10; j++) {
    st.push2(j + 10);
}
for (var i = 0; i < 10; i++) {
    console.log(`stack one pop value is : ${st.pop1()}`);
    console.log(`stack two pop value is : ${st.pop2()}`);
}
