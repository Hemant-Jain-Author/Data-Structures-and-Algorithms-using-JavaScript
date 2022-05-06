
const stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

console.log(`Stack : ${stack}`);
console.log(`Stack size : ${stack.length}`);
console.log(`Stack isEmpty : ${stack.length == 0}`);
console.log(`Stack top : ${stack[stack.length - 1]}`);
console.log(`Stack pop : ${stack.pop()}`);



/*
Stack : 1,2,3
Stack size : 3
Stack isEmpty : false
Stack top : 3
Stack pop : 3
*/