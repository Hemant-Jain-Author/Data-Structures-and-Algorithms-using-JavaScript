
function main() {
    const stack = ([]);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.info(`Stack : ${stack}`);
    console.info(`Stack size : ${stack.length}`);
    console.info(`Stack pop : ${stack.pop()}`);
    console.info(`Stack top : ${stack[stack.length - 1]}`);
    console.info(`Stack isEmpty : ${stack.length == 0}`);
};

main();
