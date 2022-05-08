function factorial(i) {
    if (i <= 1) {
        return 1;
    }
    return i * factorial(i - 1);
}

// Testing code.
console.log("factorial 5 is ::", factorial(5))

/*
factorial 5 is :: 120
*/

function printIntUtil(number, base, arr) {
    const conversion = "0123456789ABCDEF";
    const digit = (number % base);
    number = Math.floor(number / base);
    if (number !== 0) {
        printIntUtil(number, base, arr);
    }
    arr.push(conversion[digit]);
}

function printInt(number, base) {
    const arr = new Array();
    printIntUtil(number, base, arr);
    return arr.join("");
}

// Testing code.
console.log(printInt(500, 16));
/*
1F4
*/
function towerOfHanoi(num, src, dst, temp) {
    if (num < 1) {
        return;
    }
    towerOfHanoi(num - 1, src, temp, dst);
    console.log(`Move ${num} disk from peg ${src} to peg ${dst}`);
    towerOfHanoi(num - 1, temp, dst, src);
}

// Testing code.
const num = 3;
console.log("The sequence of moves are :");
towerOfHanoi(num, 'A', 'C', 'B');

/*
The sequence of moves are :
Move 1 disk from peg A to peg C
Move 2 disk from peg A to peg B
Move 1 disk from peg C to peg B
Move 3 disk from peg A to peg C
Move 1 disk from peg B to peg A
Move 2 disk from peg B to peg C
Move 1 disk from peg A to peg C
*/


function gcd(m, n) {
    if (n == 0)
        return m;
    
    if (m == 0)
        return n;

    return (gcd(n, m % n));
}

// Testing code.
console.log(gcd(15, 7));
/*
1
*/
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci2(n) {
    let first = 0;
    let second = 1;
    let temp;

    if (n === 0)
        return first;
    else if (n === 1)
        return second;

    for (let i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return temp;
}

// Testing code.
console.log(fibonacci(10));
console.log(fibonacci2(10));

/*
55
55
*/

