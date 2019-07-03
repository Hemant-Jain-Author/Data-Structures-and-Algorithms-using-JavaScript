
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
};

function matchExp(exp, str) {
    return matchExpUtil(exp, str, 0, 0);
};

function test1() {
    console.log(matchExp("hello*", "helloworld"));
    console.log(matchExp("hello?d", "hellowd"));
    console.log(matchExp("hello*hemant", "helloworldfsdfsdfdsfhemant"));
    console.log(matchExp("*hemantj", "helloworldfsdfsdfdsfhemant"));
};
//test1();

function match(source, pattern) {
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
};

function test2() {
    console.log(match("hellofskdlfjsdlfjsldjflksdworld", "helloworld"));
    console.log(match("hellod", "hellowd"));
    console.log(match("hello*xxxxxxxxxxhemantxxxxxxxxxxxx", "hellnt"));
    console.log()
};

//test2();

function isPrime(n) {
    let answer = (n > 1) ? true : false;
    for (let i = 2; i * i < n; ++i) {
        if (n % i === 0) {
            answer = false;
            break;
        }
    }
    return answer;
};

function test3() {
    process.stdout.write("Prime numbers under 100 :: ");
    for (let i = 0; i < 100; i++) {
        if (isPrime(i))
            process.stdout.write(`${i} `);
    }
    console.log()
};
//test3();

function isUniqueChar(str) {
    const bitarr = new Array(26).fill(0);
    let index;
    var size = str.length;
    const small = "a".charCodeAt(0);
    const big = "A".charCodeAt(0);

    var size = str.length;
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
};

function test5() {
    isUniqueChar("aple");
    isUniqueChar("apple");
};

//test5();

function ToUpper(s) {
    ascii = s.charCodeAt(0)
    if (ascii >= 97 && ascii <= (97 + 25)) {
        s = String.fromCharCode(ascii - 32);
    }
    return s;
};

function ToLower(s) {
    ascii = s.charCodeAt(0)
    if (ascii >= 65 && ascii <= (65 + 25)) {
        s = String.fromCharCode(ascii + 32);
    }
    return s;
};

function LowerUpper(s) {
    ascii = s.charCodeAt(0)
    if (ascii >= 97 && ascii <= (97 + 25)) {
        s = String.fromCharCode(ascii - 32);
    }
    else if (ascii >= 65 && ascii <= (65 + 25)) {
        s = String.fromCharCode(ascii + 32);
    }
    return s;
};

function test6() {
    console.info(ToLower('A'));
    console.info(ToUpper('a'));
    console.info(LowerUpper('s'));
    console.info(LowerUpper('S'));
};
//test6();

function isPermutation(s1, s2) {
    const count = new Array(256).fill(0);
    const length = s1.length;
    if (s2.length !== length) {
        return false;
    }

    for (var i = 0; i < length; i++) {
        count[s1.charCodeAt(i)]++;
        count[s2.charCodeAt(i)]--;
    }

    for (var i = 0; i < length; i++) {
        if (count[s1.charCodeAt(i)] !== 0) {
            return false;
        }
    }

    return true;
};

function test7() {
    console.info("isPermutation :", isPermutation("apple", "plepa"));
    console.info("isPermutation :", isPermutation("appleb", "plepaa"));
};

//test7();

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while ((i < j) && (str[i] == str[j])) {
        i++;
        j--;
    }

    if (i < j) {
        console.info(str, "is not a Palindrome");
        return false;
    }
    else {
        console.info(str, "is a Palindrome");
        return true;
    }
};

function test8() {
    isPalindrome("hello");
    isPalindrome("eoloe");
};

//test8();

function pow(x, n) {
    let value;
    if (n === 0) {
        return (1);
    }
    else if (n % 2 === 0) {
        value = pow(x, Math.floor(n / 2));
        return (value * value);
    }
    else {
        value = pow(x, Math.floor(n / 2));
        return (x * value * value);
    }
};

function test9() {
    console.info(pow(5, 2));
};
//test9();

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
    }
    else if (len1 === index) {
        return -1;
    }
    else if (len2 === index) {
        return 1;
    }
    else {
        return (a.charCodeAt(index) - b.charCodeAt(index));
    }
};

function test10() {
    console.info("StrCmp returns :", myStrcmp("aba", "aas"));
};

//test10();

function reverseString(str) {
    const a = (str).split('');
    reverseStringUtil(a);
    const expn = a.join('');
    return expn;
};

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
};

function reverseStringUtil2(a, lower, upper) {
    let tempChar;

    while (lower < upper) {
        tempChar = a[lower];
        a[lower] = a[upper];
        a[upper] = tempChar;
        lower++;
        upper--;
    }
};

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
};

function test11() {
    console.info(reverseString("apple"));
    console.info(reverseWords("hello world"));
};

//test11();

function printAnagram(str) {
    const a = str.split('');
    const n = a.length;
    printAnagramUtil(a, n, n);
};

function printAnagramUtil(a, max, n) {
    if (max === 1) {
        console.info(a.join(""));
    }
    let temp;
    for (let i = -1; i < max - 1; i++) {
        if (i !== -1) {
            temp = a[i];
            a[i] = a[max - 1];
            a[max - 1] = temp;
        }
        printAnagramUtil(a, max - 1, n);
        if (i !== -1) {
            temp = a[i];
            a[i] = a[max - 1];
            a[max - 1] = temp;
        }
    }
};

function test12() {
    printAnagram("123");
};

//test12();

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
};

function test13() {
    console.log(shuffle("ABCDE12345"));
};
A1B2C3D4E5
test13();

function addBinary(first, second) {
    let size1 = first.length;
    let size2 = second.length;
    let totalIndex;
    let total;
    if (size1 > size2) {
        total = new Array(size1 + 2).fill(null);
        totalIndex = size1;
    }
    else {
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
};

function test14() {
    console.info(addBinary("1000", "11111111"));
};
//test14();
