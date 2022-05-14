/* REMOVE FROM BOOK */
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
        } else {
            console.log("Stack is Full!");
        }
    }

    push2(value) {
        if (this.top1 < this.top2 - 1) {
            this.data[--this.top2] = value;
        } else {
            console.log("Stack is Full!");
        }
    }

    pop1() {
        if (this.top1 >= 0) {
            const value = this.data[this.top1--];
            return value;
        } else {
            console.log("Stack Empty!");
        }
        return -999;
    }

    pop2() {
        if (this.top2 < this.MAX_SIZE) {
            const value = this.data[this.top2++];
            return value;
        } else {
            console.log("Stack Empty!");
        }
        return -999;
    }
}

// Testing code.
const st = new TwoStack();
st.push1(1);
st.push1(2);
st.push1(3);
st.push2(4);
st.push2(5);
st.push2(6);
console.log("stk1 pop: " + st.pop1());
console.log("stk1 pop: " + st.pop1());
console.log("stk2 pop: " + st.pop2());
console.log("stk2 pop: " + st.pop2());

/*
stk1 pop: 3
stk1 pop: 2
stk2 pop: 6
stk2 pop: 5
*/
