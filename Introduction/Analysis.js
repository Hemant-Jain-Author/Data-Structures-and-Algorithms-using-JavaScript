function fun1(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        m += 1;
    }
    return m;
};

console.log(`Number of instructions O(n):: ${fun1(100)}`);

//Output: Number of instructions O(n):: 100

function fun2(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n^2):: ${fun2(100)}`);

//Output: Number of instructions O(n^2):: 10000

function fun3(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n^2):: ${fun3(100)}`);

//Output: Number of instructions O(n^2):: 4950

function fun4(n) {
    let i = 1;
    let m = 0;
    while (i < n) {
        m += 1;
        i = i * 2;
    };
    return m;
};

console.log(`Number of instructions O(log(n)):: ${fun4(100)}`);

//Output: Number of instructions O(log(n)):: 7

function fun5(n) {
    let i = n;
    let m = 0;
    while (i > 0) {
        m += 1;
        i = Math.floor(i / 2);
    };
    return m;
};

console.log(`Number of instructions O(log(n)):: ${fun5(100)}`);

//Output: Number of instructions O(log(n)):: 7

function fun6(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                m += 1;
            }
        }
    }
    return m;
};

console.log(`Number of instructions O(n^3):: ${fun6(100)}`);

//Output: Number of instructions O(n^3):: 1000000

function fun7(n) {
    let i;
    let j;
    let k;
    let m = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            m += 1;
        }
    }
    for (i = 0; i < n; i++) {
        for (k = 0; k < n; k++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n^2):: ${fun7(100)}`);

//Output: Number of instructions O(n^2):: 20000

function fun8(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.sqrt(n); j++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n^(3/2)):: ${fun8(100)}`);

//Output: Number of instructions O(n^(3/2)):: 1000

function fun9(n) {
    let m = 0;
    for (let i = n; i >= 1; i /= 2) {
        for (let j = 0; j < i; j++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n):: ${fun9(100)}`);

//Output: Number of instructions O(n):: 201

function fun10(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j > 0; j--) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n^2):: ${fun10(100)}`);

//Output: Number of instructions O(n^2):: 4950

function fun11(n) {
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                m += 1;
            }
        }
    }
    return m;
};

console.log(`Number of instructions O(n^3):: ${fun11(100)}`);

//Output: Number of instructions O(n^3):: 166650

function fun12(n) {
    let j = 0;
    let m = 0;
    for (let i = 0; i < n; i++) {
        for (; j < n; j++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n):: ${fun12(100)}`);

//Output: Number of instructions O(n):: 100

function fun13(n) {
    let m = 0;
    for (let i = 1; i <= n; i *= 2) {
        for (let j = 0; j <= i; j++) {
            m += 1;
        }
    }
    return m;
};

console.log(`Number of instructions O(n):: ${fun13(100)}`);

//Output: Number of instructions O(n):: 134
