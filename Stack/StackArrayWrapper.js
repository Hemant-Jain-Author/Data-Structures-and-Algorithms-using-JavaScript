class Stack {
  constructor() {
    this.data = [];
  }

  length() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  push(value) {
    this.data.push(value);
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("StackEmptyException");
    }
    return this.data[this.data.length - 1];
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("StackEmptyException");
    }
    return this.data.pop();
  }

  print() {
    let str = "[ ";
    for (let i = this.data.length - 1; i >= 0; i--) {
      str = str + this.data[i] + " ";
    }
    str += "]";
    console.log(str);
  }
}

const s = new Stack();
for (var i = 1; i <= 100; i++) {
  s.push(i);
}
s.print();
for (var i = 1; i <= 100; i++) {
  s.pop();
}
s.print();
