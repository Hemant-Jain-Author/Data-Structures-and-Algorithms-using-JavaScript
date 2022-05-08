function andEx(a, b) {
    return a & b;
}

function orEx(a, b) {
    return a | b;
}

function xorEx(a, b) {
    return a ^ b;
}

function leftShiftEx(a) {
    return a << 1; // multiply by 2
}

function rightShiftEx(a) { 
    return a >> 1; // divide by 2
}

function bitReversalEx(a) {
    return ~a;
}

function twoComplementEx(a) {
    return -a;
}

function kthBitCheck(a, k) {
    return (a & 1 << (k - 1)) > 0;
}

function kthBitSet(a, k) {
    return (a | 1 << (k - 1));
}

function kthBitReset(a, k) {
    return (a & ~(1 << (k - 1)));
}

function kthBitToggle(a, k) {
    return (a ^ (1 << (k - 1)));
}

function rightMostBit(a) {
    return a & -a;
}

function resetRightMostBit(a) {
    return a & (a - 1);
}

function isPowerOf2(a) {
    if ((a & (a - 1)) == 0) {
        return true;
    } else {
        return false;
    }
}

function countBits(a) {
    let count = 0;
    while (a > 0) {
        count += 1;
        a = a & (a - 1);
    }
    return count;
}

// Testing code.
let a = 4;
let b = 8;
console.log(andEx(a, b));
console.log(orEx(a, b));
console.log(xorEx(a, b));
console.log(leftShiftEx(a)); // multiply by 2
console.log(rightShiftEx(a)); // divide by 2
console.log(bitReversalEx(a));
console.log(twoComplementEx(a));
console.log(kthBitCheck(a, 3));
console.log(kthBitSet(a, 2));
console.log(kthBitReset(a, 3));
console.log(kthBitToggle(a, 3));
console.log(rightMostBit(a));
console.log(resetRightMostBit(a));
console.log(isPowerOf2(a));
for (let i = 0; i < 10; i++) {
    console.log(i + " bit count : " + countBits(i));
}


/*
0
12
12
8
2
-5
-4
true
6
0
0
4
0
true
*/

/*
0 bit count : 0
1 bit count : 1
2 bit count : 1
3 bit count : 2
4 bit count : 1
5 bit count : 2
6 bit count : 2
7 bit count : 3
8 bit count : 1
9 bit count : 2
*/