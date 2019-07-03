function BruteForceSearch(text, pattern) {
    if ((typeof text === 'string') && (typeof pattern === 'string')) {
        let i = 0;
        let j = 0;
        const n = text.length;
        const m = pattern.length;
        while (i <= n - m) {
            j = 0;
            while (j < m && pattern[j] === text[i + j]) {
                j++;
            };
            if (j === m) {
                return (i);
            }
            i++;
        };
        return -1;
    }
    else
        throw new Error('invalid arguments');
};

function RobinKarp(text, pattern) {

    if ((typeof text === 'string') && (typeof pattern === 'string')) {
        return RobinKarpUtil(text, pattern);
    } else
        throw new Error('invalid overload');
};

function RobinKarpUtil(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    let i;
    let j;
    const prime = 101;
    let powm = 1;
    let TextHash = 0;
    let PatternHash = 0;
    if (m === 0 || m > n) {
        return -1;
    }
    for (i = 0; i < m - 1; i++) {
        powm = (powm << 1) % prime;
    }
    for (i = 0; i < m; i++) {
        PatternHash = ((PatternHash << 1) + (pattern[i]).charCodeAt(0)) % prime;
        TextHash = ((TextHash << 1) + (text[i]).charCodeAt(0)) % prime;
    }
    for (i = 0; i <= (n - m); i++) {
        if (TextHash === PatternHash) {
            for (j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    break;
                }
            }
            if (j === m)
                return i;
        }
        TextHash = (((TextHash - (text[i]).charCodeAt(0) * powm) << 1) + (text[i + m]).charCodeAt(0))
            % prime;
        if (TextHash < 0) {
            TextHash = (TextHash + prime);
        }
    }
    return -1;
};

function KMPPreprocess(pattern, ShiftArr) {
    const m = pattern.length;
    let i = 0;
    let j = -1;
    ShiftArr[i] = -1;
    while (i < m) {
        while (j >= 0 && pattern[i] !== pattern[j]) {
            j = ShiftArr[j];
        };
        i++;
        j++;
        ShiftArr[i] = j;
    };
};

function KMP(text, pattern) {
    if ((typeof text === 'string') && (typeof pattern === 'string')) {
        return KMPUtil(text, pattern);
    } else
        throw new Error('invalid overload');
};

function KMPUtil(text, pattern) {
    let i = 0;
    let j = 0;
    const n = text.length;
    const m = pattern.length;
    const ShiftArr = new Array(m + 1);
    KMPPreprocess(pattern, ShiftArr);
    while (i < n) {
        while (j >= 0 && text[i] !== pattern[j])
            j = ShiftArr[j];
        i++;
        j++;
        if (j === m) {
            return (i - m);
        }
    };
    return -1;
};

function KMPFindCount(text, pattern) {
    let i = 0;
    let j = 0;
    let count = 0;
    const n = text.length;
    const m = pattern.length;
    const ShiftArr = new Array(m + 1);
    KMPPreprocess(pattern, ShiftArr);
    while (i < n) {
        while (j >= 0 && text[i] !== pattern[j]) {
            j = ShiftArr[j];
        };
        i++;
        j++;
        if (j === m) {
            count++;
            j = ShiftArr[j];
        }
    };
    return count;
};

const st1 = "hello, world!";
const st2 = "world";
console.log(`Using BruteForceSearch pattern found at index : ${BruteForceSearch(st1, st2)}`);
console.log(`Using RobinKarp  pattern found at index : ${RobinKarp(st1, st2)}`);
console.log(`Using KMP  pattern found at index : ${KMP(st1, st2)}`);

const str3 = "Only time will tell if we stand the test of time"
console.log('Frequency of "time" is ', KMPFindCount(str3, "time"))

