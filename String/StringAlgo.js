function matchExpUtil(exp, str, i, j) {
    if (i === exp.length && j === str.length) {
        return true;
    }
    if ((i === exp.length && j !== str.length) ||
        (i !== exp.length && j === str.length)) {
        return false;
    }
    if (exp[i] === '?' || exp[i] === str[j]) {
        return matchExpUtil(exp, str, i + 1, j + 1);
    }
    if (exp[i] === '*') {
        return matchExpUtil(exp, str, i + 1, j)
            || matchExpUtil(exp, str, i, j + 1)
            || matchExpUtil(exp, str, i + 1, j + 1);
    }
    return false;
}

function matchExp(exp, str) {
    return matchExpUtil(exp, str, 0, 0);
}

// Testing code.
function test1() {
    console.log(matchExp("hello*", "helloworld"));
    console.log(matchExp("hello?d", "hellowd"));
    console.log(matchExp("hello*hemant", "helloworldfsdfsdfdsfhemant"));
    console.log(matchExp("*hemantj", "helloworldfsdfsdfdsfhemant"));
}

test1();
/*
true
true
true
false
*/

function matchPattern(source, pattern) {
    let iSource = 0;
    let iPattern = 0;
    const sourceLen = source.length;
    const patternLen = pattern.length;
    for (iSource = 0; iSource < sourceLen; iSource++) {
        if (source[iSource] === pattern[iPattern]) {
            iPattern++;
        }
        if (iPattern === patternLen) {
            return true;
        }
    }
    return false;
}

// Testing code.
function test2() {
    console.log(matchPattern("hellofskdlfjsdlfjsldjflksdworld", "helloworld"));
    console.log(matchPattern("hellod", "hellowd"));
    console.log(matchPattern("hello*xxxxxxxxxxhemantxxxxxxxxxxxx", "hellnt"));
    console.log()
}

test2();
/*
true
false
true
*/

function isPrime(n) {
    let answer = (n > 1) ? true : false;
    for (let i = 2; i * i <= n; ++i) {
        if (n % i === 0) {
            answer = false;
            break;
        }
    }
    return answer;
}

// Testing code.
function test3() {
    process.stdout.write("Prime numbers under 100 :: ");
    for (let i = 0; i < 100; i++) {
        if (isPrime(i))
            process.stdout.write(`${i} `);
    }
    console.log()
}

test3();
/*
Prime numbers under 100 :: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 
*/

function isUniqueChar(str) {
    const bitarr = new Array(26).fill(0);
    const size = str.length;
    const small = "a".charCodeAt(0);
    const big = "A".charCodeAt(0);

    for (let i = 0; i < size; i++) {
        let c = str.charCodeAt(i);
        if ((big <= c) && (big + 26 >= c)) {
            c = (c - big);
        } else if ((small <= c) && (small + 26 >= c)) {
            c = (c - small);
        } else {
            console.log("Unknown Char.");
            return false;
        }
        if (bitarr[c] !== 0) {
            console.log("Duplicate detected.");
            return false;
        }
        bitarr[c] = 1;
    }
    console.log("No duplicate detected.");
    return true;
}

// Testing code.
function test5() {
    isUniqueChar("aple");
    isUniqueChar("apple");
}

test5();
/*
No duplicate detected.
Duplicate detected.
*/

function ToUpper(s) {
    ascii = s.charCodeAt(0)
    if (ascii >= 97 && ascii <= (97 + 25)) {
        s = String.fromCharCode(ascii - 32);
    }
    return s;
}

function ToLower(s) {
    ascii = s.charCodeAt(0)
    if (ascii >= 65 && ascii <= (65 + 25)) {
        s = String.fromCharCode(ascii + 32);
    }
    return s;
}

function LowerUpper(s) {
    ascii = s.charCodeAt(0)
    if (ascii >= 97 && ascii <= (97 + 25)) {
        s = String.fromCharCode(ascii - 32);
    }
    else if (ascii >= 65 && ascii <= (65 + 25)) {
        s = String.fromCharCode(ascii + 32);
    }
    return s;
}

// Testing code.
function test6() {
    console.log(ToLower('A'));
    console.log(ToUpper('a'));
    console.log(LowerUpper('s'));
    console.log(LowerUpper('S'));
}

test6();
/*
a
A
S
s
*/

function isPermutation(s1, s2) {
    const count = new Array(256).fill(0);
    const length = s1.length;
    if (s2.length !== length) {
        return false;
    }

    for (let i = 0; i < length; i++) {
        count[s1.charCodeAt(i)]++;
        count[s2.charCodeAt(i)]--;
    }

    for (let i = 0; i < length; i++) {
        if (count[s1.charCodeAt(i)] !== 0) {
            return false;
        }
    }

    return true;
}

// Testing code.
function test7() {
    console.log("isPermutation :", isPermutation("apple", "plepa"));
    console.log("isPermutation :", isPermutation("appleb", "plepaa"));
}

test7();
/*
isPermutation : true
isPermutation : false
*/

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while ((i < j) && (str[i] == str[j])) {
        i++;
        j--;
    }

    if (i < j) {
        console.log(str, "is not a Palindrome");
        return false;
    } else {
        console.log(str, "is a Palindrome");
        return true;
    }
}

// Testing code.
function test8() {
    isPalindrome("hello");
    isPalindrome("oyo");
}

test8();
/*
hello is not a Palindrome
eoloe is a Palindrome
*/

function pow(x, n) {
    let value;
    if (n === 0) {
        return (1);
    } else if (n % 2 === 0) {
        value = pow(x, Math.floor(n / 2));
        return (value * value);
    } else {
        value = pow(x, Math.floor(n / 2));
        return (x * value * value);
    }
}

// Testing code.
function test9() {
    console.log(pow(5, 2));
}

test9();
// 25

function myStrcmp(a, b) {
    let index = 0;
    const len1 = a.length;
    const len2 = b.length;
    let minlen = len1;

    if (len1 > len2) {
        minlen = len2;
    }
    while ((index < minlen) && (a[index] === b[index])) {
        index++;
    }
    if (index === len1 && index === len2) {
        return 0;
    } else if (len1 === index) {
        return -1;
    } else if (len2 === index) {
        return 1;
    } else {
        return (a.charCodeAt(index) - b.charCodeAt(index));
    }
}

// Testing code.
function test10() {
    console.log("StrCmp returns :", myStrcmp("apple", "appke"));
    console.log("StrCmp returns :", myStrcmp("apple", "apple"));
    console.log("StrCmp returns :", myStrcmp("apple", "appme"));
}

test10();

/*
StrCmp returns : 1
StrCmp returns : 0
StrCmp returns : -1
*/


function reverseString(str) {
    const a = (str).split('');
    reverseStringUtil(a);
    const expn = a.join('');
    return expn;
}

function reverseStringUtil(a) {
    let lower = 0;
    let upper = a.length - 1;
    let tempChar;

    while (lower < upper) {
        tempChar = a[lower];
        a[lower] = a[upper];
        a[upper] = tempChar;
        lower++;
        upper--;
    }
}

function reverseStringUtil2(a, lower, upper) {
    let tempChar;

    while (lower < upper) {
        tempChar = a[lower];
        a[lower] = a[upper];
        a[upper] = tempChar;
        lower++;
        upper--;
    }
}

function reverseWords(str) {
    const a = str.split("");
    const length = a.length;
    let lower;
    let upper = -1;
    lower = 0;
    for (let i = 0; i <= length; i++) {
        if (a[i] === ' ') {
            reverseStringUtil2(a, lower, upper);
            lower = i + 1;
            upper = i;
        } else {
            upper++;
        }
    }
    reverseStringUtil2(a, lower, upper - 1);
    reverseStringUtil2(a, 0, length - 1);
    return a.join("");
}

// Testing code.
function test11() {
    console.log(reverseString("apple"));
    console.log(reverseWords("hello world"));
}

test11();
/*
elppa
world hello
*/

function printAnagram(str) {
    const size = str.length;
    const arr = str.split('');
    printAnagramUtil(arr, 0, size);
}

function swapch(a, x, y) {
    let temp = a[x];
    a[x] = a[y];
    a[y] = temp;
}

function printAnagramUtil(arr, i, size) {
    if (i == size) {
        console.log(arr.join(""));
        return;
    }

    for (let j = i; j < size; j++) {
        swapch(arr, i, j);
        printAnagramUtil(arr, i + 1, size);
        swapch(arr, i, j);
    }
}
    
// Testing code.
function test12() {
    printAnagram("123");
}

test12();
/*
123
132
213
231
321
312
*/

function shuffle(str) {
    const ar = str.split('');
    const n = Math.floor(ar.length / 2);
    let count = 0;
    let k = 1;
    let temp;
    let temp2;
    for (let i = 1; i < n; i = i + 2) {
        temp = ar[i];
        k = i;
        do {
            k = (2 * k) % (2 * n - 1);
            temp2 = temp;
            temp = ar[k];
            ar[k] = temp2;
            count++;
        } while (i !== k);

        if (count === (2 * n - 2)) {
            break;
        }
    }
    return ar.join("")
}

// Testing code.
function test13() {
    console.log(shuffle("ABCDE12345"));
}

test13();
//A1B2C3D4E5

function addBinary(first, second) {
    let size1 = first.length;
    let size2 = second.length;
    let totalIndex;
    let total;
    if (size1 > size2) {
        total = new Array(size1 + 2).fill(null);
        totalIndex = size1;
    } else {
        total = new Array(size2 + 2).fill(null);
        totalIndex = size2;
    }
    total[totalIndex + 1] = '';
    let carry = 0;
    size1--;
    size2--;
    while (size1 >= 0 || size2 >= 0) {
        const firstValue = (size1 < 0) ? 0 : first[size1] - '0';
        const secondValue = (size2 < 0) ? 0 : second[size2] - '0';
        let sum = firstValue + secondValue + carry;
        carry = sum >> 1;
        sum = sum & 1;
        total[totalIndex] = (sum === 0) ? '0' : '1';
        totalIndex--;
        size1--;
        size2--;
    }
    total[totalIndex] = (carry === 0) ? '0' : '1';
    return total.join("");
}

// Testing code.
function test14() {
    console.log(addBinary("1000", "11111111"));
}
test14();
//100000111