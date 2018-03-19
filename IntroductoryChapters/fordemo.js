text = "Hello, World!";
Object.freeze(text);

PI = 3.141592653589793;
Object.freeze(PI);

function main() {
    const numbers = new Array(10);
    const sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        numbers[index] = index;
    }
    console.log(`Array elements are :: ${numbers}`);
};

function main1() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;

    for (const n of numbers) {
        sum += n;
    }

    console.log(`Sum is :: ${sum}`);
};

function main2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for (const i in numbers) {
        sum += numbers[i];
    }
    console.log(`Sum is :: ${sum}`);
};

function main3(args) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    let i = 0;
    while ((i < numbers.length)) {
        sum += numbers[i];
        i++;
    };
    console.log(`Sum is :: ${sum}`);
};
main();
main1(null);
main2(null);
main3(null);