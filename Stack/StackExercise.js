class Deque {
    constructor() {
        this.data = ([]);
    }

    size() {
        return this.data.length;
    }

    isEmpty() {
        return (this.data.length === 0);
    }

    add(val) {
        this.data.push(val);
    }

    remove() {
        return this.data.shift();
    }

    peek() {
        return this.data[0]
    }

    peekLast() {
        return this.data[this.data.length - 1]
    }

    removeLast() {
        return this.data.pop()
    }
}

function function2() {
    console.log("fun2 line 1");
};
function function1() {
    console.log("fun1 line 1");
    function2();
    console.log("fun1 line 2");
};
function test1() {
    console.log("test line 1");
    function1();
    console.log("test line 2");
};

function sortedInsert(stk, element) {
    let temp;
    if (stk.length <= 0 || element > stk[stk.length - 1])
        stk.push(element);
    else {
        temp = stk.pop();
        sortedInsert(stk, element);
        stk.push(temp);
    }
}

function test1() {
    const stk = ([]);
    stk.push(1);
    stk.push(2);
    stk.push(4);
    stk.push(5);
    sortedInsert(stk, 3)
    console.info(stk);
};
//test1()

function sortStack(stk) {
    let temp;
    console.log(stk)
    console.log(stk.length)
    if (stk.length > 0) {
        temp = stk.pop();
        sortStack(stk);
        sortedInsert(stk, temp);
    }
}

function sortStack2(stk) {
    let temp;
    const stk2 = ([]);
    while (stk.length > 0) {
        temp = stk.pop();
        while (stk2.length > 0 && stk2[stk2.length - 1] < temp) {
            stk.push(stk2.pop());
        };
        stk2.push(temp);
    }
    while (stk2.length > 0) {
        stk.push(stk2.pop());
    }
}

function test2() {
    const stk = ([]);
    stk.push(1);
    stk.push(5);
    stk.push(3);
    stk.push(2);
    stk.push(4);
    sortStack(stk)
    console.info(stk);
};

//test2()

function bottomInsert(stk, element) {
    let temp;
    if (stk.length == 0)
        stk.push(element);
    else {
        temp = stk.pop();
        bottomInsert(stk, element);
        stk.push(temp);
    }
};

function test3() {
    const stk = ([]);
    stk.push(1);
    stk.push(2);
    stk.push(3);
    bottomInsert(stk, 4)
    console.info(stk);
};
//test3()

function reverseStack(stk) {
    if (stk.length == 0) {
        return;
    } else {
        const value = stk.pop();
        reverseStack(stk);
        bottomInsert(stk, value);
    }
}

function reverseStack2(stk) {
    const que = new Deque();
    while (stk.length > 0) {
        que.add(stk.pop());
    };

    while (que.isEmpty() === false) {
        stk.push(que.remove());
    };
};

function reverseStack3(stk) {
    if (stk.length == 0) {
        return;
    } else {
        let lower = 0;
        let upper = stk.length - 1;
        let temp;
        while (lower < upper) {
            temp = stk[lower];
            stk[lower] = stk[upper];
            stk[upper] = temp;
            lower++;
            upper--;
        }
    }
}

function test4() {
    const stk = ([]);
    stk.push(1);
    stk.push(2);
    stk.push(3);
    console.info("Stack before reversal", stk);
    reverseStack(stk)
    console.info("Stack after reversal", stk);
};
//test4()

function reverseKElementInStack(stk, k) {
    const que = new Deque();
    let i = 0;
    while (stk.length > 0 && i < k) {
        que.add(stk.pop());
        i++;
    };
    while (que.isEmpty() === false) {
        stk.push(que.remove());
    };
};

function test5() {
    const stk = ([]);
    stk.push(1);
    stk.push(2);
    stk.push(3);
    stk.push(4);
    reverseKElementInStack(stk, 2)
    console.info(stk);
};
//test5()

function reverseQueue(que) {
    const stk = ([]);
    while (que.isEmpty() === false) {
        stk.push(que.remove());
    };
    while (stk.length > 0) {
        que.add(stk.pop());
    };
};

function test6() {
    const que = new Deque()
    que.add(1);
    que.add(2);
    que.add(3);
    console.log(que)
    reverseQueue(que)
    console.info(que);
};

//test6()

function reverseKElementInQueue(que, k) {
    const stk = ([]);
    let i = 0;
    let diff;
    let temp;
    while (que.isEmpty() === false && i < k) {
        stk.push(que.remove())
        i++;
    }
    while (stk.length > 0) {
        que.add(stk.pop());
    }
    diff = que.size() - k;
    while (diff > 0) {
        temp = que.remove();
        que.add(temp);
        diff -= 1;
    }
};

function test7() {
    const que = new Deque()
    que.add(1);
    que.add(2);
    que.add(3);
    que.add(4);
    console.log(que)
    reverseKElementInQueue(que, 2)
    console.info(que);
};

//test7()

function isBalancedParenthesis(expn) {
    const stk = [];
    for (let index = 0; index < expn.length; index++) {
        const ch = expn[index];
        switch (ch) {
            case '{':
            case '[':
            case '(':
                stk.push(ch);
                break;
            case '}':
                if (stk.pop() !== '{') {
                    return false;
                }
                break;
            case ']':
                if (stk.pop() !== '[') {
                    return false;
                }
                break;
            case ')':
                if (stk.pop() !== '(') {
                    return false;
                }
                break;
        }
    }
    return (stk.length == 0);
}


function test8() {
    const expn = "{()}[]";
    const value = isBalancedParenthesis(expn);
    console.log(`Given Expn:${expn}`);
    console.log(`Is Balanced Parenthesis : ${value}`);
}

//test8()


function maxDepthParenthesis(expn, size) {
    const stk = ([]);
    let maxDepth = 0;
    let depth = 0;
    let ch;
    for (let i = 0; i < size; i++) {
        ch = expn[i];
        if (ch == '(') {
            stk.push(ch);
            depth += 1;
        }
        else if (ch == ')') {
            stk.pop();
            depth -= 1;
        }
        if (depth > maxDepth)
            maxDepth = depth;
    }
    return maxDepth;
}

function maxDepthParenthesis2(expn, size) {
    let maxDepth = 0;
    let depth = 0;
    let ch;
    for (let i = 0; i < size; i++) {
        ch = expn[i];
        if (ch == '(')
            depth += 1;
        else if (ch == ')')
            depth -= 1;
        if (depth > maxDepth)
            maxDepth = depth;
    }
    return maxDepth;
}

function test14() {
    const expn = "((((A)))((((BBB()))))()()()())";
    const size = expn.length;
    const value = maxDepthParenthesis(expn, size);
    const value2 = maxDepthParenthesis2(expn, size);
    console.info(`Given expn ${expn}`);
    console.info(`Max depth parenthesis is ${value}`);
    console.info(`Max depth parenthesis is ${value2}`);
};

//test14()

function longestContBalParen(string, size) {
    const stk = ([]);
    stk.push(-1);
    let length = 0;
    for (let i = 0; i < size; i++) {
        if (string[i] == '(')
            stk.push(i);
        else {
            stk.pop();
            if (stk.length != 0)
                length = Math.max(length, i - stk[stk.length - 1]);
            else
                stk.push(i);
        }
    }
    return length;
}

function test15() {
    const expn = "())((()))(())()(()";
    const size = expn.length;
    const value = longestContBalParen(expn, size);
    console.info(`longestContBalParen : ${value}`);
};

//test15()

function reverseParenthesis(expn, size) {
    const stk = ([]);
    let openCount = 0;
    let closeCount = 0;
    let ch;
    if (size % 2 === 1) {
        console.info(`Invalid odd length ${size}`);
        return -1;
    }
    for (let i = 0; i < size; i++) {
        ch = expn[i];
        if (ch == '(')
            stk.push(ch);
        else if (ch == ')')
            if (stk.length !== 0 && stk[stk.length - 1] == '(')
                stk.pop();
            else
                stk.push(')');
    }
    console.log(stk)
    while (stk.length !== 0) {
        if (stk.pop() == '(')
            openCount += 1;
        else
            closeCount += 1;
    }
    console.log(openCount, closeCount)
    const reversal = Math.ceil(openCount / 2.0) + Math.ceil(closeCount / 2.0);
    return reversal;
}

function test16() {
    const expn  = ")(())(((";
    const size = expn.length;
    const value = reverseParenthesis(expn, size);
    console.info(`reverse Parenthesis is : ${value}`);
};

test16()

function findDuplicateParenthesis(expn, size) {
    const stk = ([]);
    let ch;
    let count;
    for (let i = 0; i < size; i++) {
        ch = expn[i];
        if (ch == ')') {
            count = 0;
            while (stk.length !== 0 && stk[stk.length - 1] != '(') {
                stk.pop();
                count += 1;
            }
            if (count <= 1)
                return true;
        }
        else
            stk.push(ch);
    }
    return false;
};

function test17() {
    const expn = "(((a+b))+c)";
    const size = expn.length;
    const value = findDuplicateParenthesis(expn, size);
    console.info(`Duplicate Found : ${value}`);
};

//test17()

function printParenthesisNumber(expn, size) {
    let ch;
    const stk = ([]);
    let output = "";
    let count = 1;
    for (let i = 0; i < size; i++) {
        ch = expn[i];
        if (ch == '(') {
            stk.push(count);
            output += count;
            count += 1;
        }
        else if (ch == ')')
            output += stk.pop();
    }
    console.info("Parenthesis Count : ", output);
}

function test18() {
    const expn1 = "(((a+(b))+(c+d)))";
    const expn2 = "(((a+b))+c)(((";
    let size = expn1.length;
    console.info(`Given expn ${expn1}`);
    printParenthesisNumber(expn1, size);
    size = expn2.length;
    console.info(`Given expn ${expn2}`);
    printParenthesisNumber(expn2, size);
};

//test18()


function precedence(x) {
    if (x === '(') {
        return (0);
    }
    if (x === '+' || x === '-') {
        return (1);
    }
    if (x === '*' || x === '/' || x === '%')
        return (2);
    if (x === '^') {
        return (3);
    }
    return (4);
}


function infixToPostfix(expn) {
    const stk = [];
    let output = "";
    let out;
    for (let index = 0; index < expn.length; index++) {
        const ch = expn[index];
        if (ch <= '9' && ch >= '0') {
            output = output + ch;
        } else {
            switch (ch) {
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                case '^':
                    while (stk.length != 0
                        && precedence(ch) <= precedence(stk[stk.length - 1])) {
                        out = stk.pop();
                        output = `${output} ${out}`;
                    };
                    stk.push(ch);
                    output = `${output} `;
                    break;
                case '(':
                    stk.push(ch);
                    break;
                case ')':
                    while (stk.length != 0 && (out = stk.pop()) !== '(') {
                        output = `${output} ${out} `;
                    };
                    break;
            }
        }

    }
    while (stk.length != 0) {
        out = stk.pop();
        output = `${output} ${out}`;
    };
    return output;
}

function test10() {
    const expn = "10+((3))*5/(16-4)";
    const value = infixToPostfix(expn);
    console.log(`Infix Expn: ${expn}`);
    console.log(`Postfix Expn: ${value}`);
}

//test10()

function infixToPrefix(expn) {
    expn = reverseString(expn);
    expn = replaceParanthesis(expn);
    expn = infixToPostfix(expn);
    expn = reverseString(expn);
    return expn;
}

function reverseString(expn) {
    let reverse = "";
    let upper = expn.length - 1;
    
    while (upper >= 0) {
        reverse += expn[upper];
        upper--;
    };
    return reverse;
}

function replaceParanthesis(expn) {
    let retval = "";
    const size = expn.length;
    let index = 0;
    while (index < size) {
        if (expn[index] === '(') {
            retval += ')';
        } else if (expn[index] === ')') {
            retval += '(';
        } else {
            retval += expn[index];
        }
        index++;
    };

    return retval;
}

function test11() {
    const expn = "10+((3))*5/(16-4)";
    const value = infixToPrefix(expn);
    console.log(`Infix Expn: ${expn}`);
    console.log(`Prefix Expn: ${value}`);
}

//test11()


function postfixEvaluate(expn) {
    const stk = [];
    let temp;
    const tokens = expn.split(" ");
    for (const tok in tokens) {
        temp = parseInt(tokens[tok]);
        if (isNaN(temp) === false) {
            stk.push(temp);
        }
        else {
            num1 = stk.pop();
            num2 = stk.pop();
            op = tokens[tok];
            switch (op) {
                case '+':
                    stk.push(num1 + num2);
                    break;
                case '-':
                    stk.push(num1 - num2);
                    break;
                case '*':
                    stk.push(num1 * num2);
                    break;
                case '/':
                    stk.push(num1 / num2);
                    break;
            }
        }
    }
    return stk.pop();
}

function test9() {
    expn = "6 5 2 3 + 8 * + 3 + *";
    value = postfixEvaluate(expn);
    console.log(`Given Postfix Expn: ${expn}`);
    console.log(`Result after Evaluation: ${value}`);
}

//test9()

function StockSpanRange(arr) {
    const SR = new Array(arr.length);
    SR[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        SR[i] = 1;
        for (let j = i - 1; (j >= 0) && (arr[i] >= arr[j]); j--) {
            SR[i]++;
        }
    }
    return SR;
}

function StockSpanRange2(arr) {
    const stk = ([]);
    const SR = new Array(arr.length);
    stk.push(0);
    SR[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        while ( stk.length > 0 && arr[stk[stk.length - 1]] <= arr[i]) {
            stk.pop();
        };
        SR[i] = (stk.length == 0) ? (i + 1) : (i - stk[stk.length - 1]);
        stk.push(i);
    }
    return SR;
}

function test12() {
    let arr = [6, 5, 4, 3, 2, 4, 5, 7, 9];
    let value = StockSpanRange(arr);
    console.info("StockSpanRange : ", value);

    arr = [6, 5, 4, 3, 2, 4, 5, 7, 9];
    value = StockSpanRange2(arr);
    console.info("StockSpanRange : ", value);
}

// test12()

function GetMaxArea(arr) {
    const size = arr.length;
    let maxArea = -1;
    let currArea;
    let minHeight = 0;
    for (let i = 1; i < size; i++) {
        minHeight = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (minHeight > arr[j]) {
                minHeight = arr[j];
            }
            currArea = minHeight * (i - j + 1);
            if (maxArea < currArea) {
                maxArea = currArea;
            }
        }
    }
    return maxArea;
}

function GetMaxArea2(arr) {
    const size = arr.length;
    const stk = [];
    let maxArea = 0;
    let top;
    let topArea;
    let i = 0;
    while (i < size) {
        while ((i < size) && (stk.length == 0 || arr[stk[stk.length - 1]] <= arr[i])) {
            stk.push(i);
            i++;
        }
        while ((stk.length > 0) && (i === size || arr[stk[stk.length - 1]] > arr[i])) {
            top = stk[stk.length - 1];
            stk.pop();
            topArea = arr[top] * ((stk.length == 0)? i : i - stk[stk.length - 1] - 1);
            if (maxArea < topArea) {
                maxArea = topArea;
            }
        }
    }
    return maxArea;
}

function test13() {
    const arr = [7, 6, 5, 4, 4, 1, 6, 3, 1];
    const size = arr.length;
    let value = GetMaxArea(arr);
    console.info(`GetMaxArea :: ${value}`);
    
    value = GetMaxArea2(arr);
    console.info(`GetMaxArea :: ${value}`);
}

//test13()


function nextLargerElement(arr, size) {
    const output = new Array(size);
    let outIndex = 0;
    let next;
    for (let i = 0; i < size; i++) {
        next = -1;
        for (let j = i + 1; j < size; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        output[outIndex++] = next;
    }

    console.log(output)
};

function nextLargerElement2(arr, size) {
    const stk = ([]);
    const output = new Array(size);
    let index = 0;
    let curr;
    for (let i = 0; i < size; i++) {
        curr = arr[i];
        while (stk.length > 0 && arr[stk[stk.length - 1]] <= curr) {
            index = stk.pop();
            output[index] = curr;
        }
        stk.push(i);
    }
    
    while (stk.length > 0) {
        index = stk.pop();
        output[index] = -1;
    }
    console.log(output)
}

function nextSmallerElement(arr, size) {
    const stk = ([]);
    const output = new Array(size);
    let curr;
    let index;
    for (let i = 0; i < size; i++) {
        curr = arr[i];
        while (stk.length > 0 && arr[stk[stk.length - 1]] > curr) {
            index = stk.pop();
            output[index] = curr;
        }
        stk.push(i);
    }
    
    while (stk.length > 0) {
        index = stk.pop();
        output[index] = -1;
    }

    console.log(output)
}

function test19() {
    const arr = [13, 21, 3, 6, 20, 3];
    const size = arr.length;
    nextLargerElement(arr, size);
    nextLargerElement2(arr, size);
    nextSmallerElement(arr, size);
};

//test19()

function nextLargerElementCircular(arr, size) {
    const stk = ([]);
    let curr;
    let index;
    const output = new Array(size);
    for (let i = 0; i < (2 * size - 1); i++) {
        curr = arr[i % size];
        while (stk.length > 0 && arr[stk[stk.length - 1]] <= curr) {
            index = stk.pop();
            output[index] = curr;
        }
        stk.push(i % size);
    }
    
    while (stk.length > 0) {
        index = stk.pop();
        output[index] = -1;
    }
    console.log(output)
}

function test20() {
    const arr = [6, 3, 9, 8, 10, 2, 1, 15, 7];
    const size = arr.length;
    nextLargerElementCircular(arr, size);
};

//test20()

function RottenFruitUtil(arr, maxCol, maxRow, currCol, currRow, traversed, day) {
    if (currCol < 0 || currCol >= maxCol || currRow < 0 || currRow >= maxRow || 
        traversed[currCol][currRow] <= day || arr[currCol][currRow] === 0)
        return;
    traversed[currCol][currRow] = day;
    RottenFruitUtil(arr, maxCol, maxRow, currCol - 1, currRow, traversed, day + 1);
    RottenFruitUtil(arr, maxCol, maxRow, currCol + 1, currRow, traversed, day + 1);
    RottenFruitUtil(arr, maxCol, maxRow, currCol, currRow + 1, traversed, day + 1);
    RottenFruitUtil(arr, maxCol, maxRow, currCol, currRow - 1, traversed, day + 1);
}

const Max_Int = 2147483647

function RottenFruit(arr, maxCol, maxRow) {
    const traversed = Array(maxRow);
    for (var i = 0; i < maxRow; i++) {
        traversed[i] = Array(maxCol).fill(Max_Int)
    }

    for (var i = 0; i < maxCol - 1; i++) {
        for (var j = 0; j < maxRow - 1; j++) {
            if (arr[i][j] === 2)
                RottenFruitUtil(arr, maxCol, maxRow, i, j, traversed, 0);
        }
    }

    let maxDay = 0;
    for (var i = 0; i < maxCol - 1; i++) {
        for (var j = 0; j < maxRow - 1; j++) {
            if (arr[i][j] === 1) {
                if (traversed[i][j] === Max_Int)
                    return -1;
                if (maxDay < traversed[i][j])
                    maxDay = traversed[i][j];
            }
        }
    }
    return maxDay;
}

function test21() {
    const arr = [[1, 0, 1, 1, 0], 
    [2, 1, 0, 1, 0], 
    [0, 0, 0, 2, 1], 
    [0, 2, 0, 0, 1], 
    [1, 1, 0, 0, 1]];
    
    console.info(RottenFruit(arr, 5, 5));
};

//test21()

function StepsOfKnightUtil(size, currCol, currRow, traversed, dist) {
    if (currCol < 0 || currCol >= size || currRow < 0 || currRow >= size )
        return;
    if (traversed[currCol][currRow] <= dist)
        return;
    
    traversed[currCol][currRow] = dist;
    StepsOfKnightUtil(size, currCol - 2, currRow - 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol - 2, currRow + 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 2, currRow - 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 2, currRow + 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol - 1, currRow - 2, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 1, currRow - 2, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol - 1, currRow + 2, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 1, currRow + 2, traversed, dist + 1);
}

function StepsOfKnight(size, srcX, srcY, dstX, dstY) {
    const traversed = Array(size);
    for (let i = 0; i < size; i++) {
        traversed[i] = Array(size).fill(Max_Int)
    }

    StepsOfKnightUtil(size, srcX - 1, srcY - 1, traversed, 0);
    const retval = traversed[dstX - 1][dstY - 1];
    return retval;
}

function test22() {
    console.info(StepsOfKnight(20, 10, 10, 20, 20));
};

//test22()

function DistNearestFillUtil(arr, maxCol, maxRow, currCol, currRow, traversed, dist) {
    if (currCol < 0 || currCol >= maxCol || currRow < 0 || currRow >= maxRow)
        return;
    if (traversed[currCol][currRow] <= dist)
        return;
    traversed[currCol][currRow] = dist;
    DistNearestFillUtil(arr, maxCol, maxRow, currCol - 1, currRow, traversed, dist + 1);
    DistNearestFillUtil(arr, maxCol, maxRow, currCol + 1, currRow, traversed, dist + 1);
    DistNearestFillUtil(arr, maxCol, maxRow, currCol, currRow + 1, traversed, dist + 1);
    DistNearestFillUtil(arr, maxCol, maxRow, currCol, currRow - 1, traversed, dist + 1);
}

function DistNearestFill(arr, maxCol, maxRow) {
    const traversed = Array(maxRow);
    for (var i = 0; i < maxRow; i++) {
        traversed[i] = Array(maxCol).fill(Max_Int)
    }

    for (var i = 0; i < maxCol; i++) {
        for (let j = 0; j < maxRow; j++) {
            if (arr[i][j] === 1)
                DistNearestFillUtil(arr, maxCol, maxRow, i, j, traversed, 0);
        }
    }

    for (var i = 0; i < maxCol; i++) {
        console.info(traversed[i]);
    }
}

function test23() {
    const arr = [[1, 0, 1, 1, 0], 
    [1, 1, 0, 1, 0], 
    [0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 1]];

    DistNearestFill(arr, 5, 5);
};

//test23()

function findLargestIslandUtil(arr, maxCol, maxRow, currCol, currRow, value, traversed) {
    if (currCol < 0 || currCol >= maxCol || currRow < 0 || currRow >= maxRow)
        return 0;
    if (traversed[currCol][currRow] === 1 || arr[currCol][currRow] !== value)
        return 0;
    traversed[currCol][currRow] = 1;
    return 1 + findLargestIslandUtil(arr, maxCol, maxRow, currCol - 1, currRow - 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol - 1, currRow, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol - 1, currRow + 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol, currRow - 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol, currRow + 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol + 1, currRow - 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol + 1, currRow, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol + 1, currRow + 1, value, traversed);
}

function findLargestIsland(arr, maxCol, maxRow) {
    let maxVal = 0;
    let currVal = 0;
    const traversed = Array(maxRow);
    
    for (var i = 0; i < maxRow; i++) {
        traversed[i] = Array(maxCol).fill(Max_Int)
    }

    for (var i = 0; i < maxCol; i++) {
        for (let j = 0; j < maxRow; j++) {
            currVal = findLargestIslandUtil(arr, maxCol, maxRow, i, j, arr[i][j], traversed);
            if (currVal > maxVal)
                maxVal = currVal;
        }
    }
    return maxVal;
}

function test24() {
    const arr = [[1, 0, 1, 1, 0], 
    [1, 0, 0, 1, 0], 
    [0, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0], 
    [1, 1, 0, 0, 1]];

    console.info(`Largest Island : ${findLargestIsland(arr, 5, 5)}`);
};

//test24()

function isKnown(relation, a, b) {
    if (relation[a][b] === 1)
        return true;
    return false;
}

function findCelebrity(relation, count) {
    const stk = ([]);
    let first = 0;
    let second = 0;
    for (var i = 0; i < count; i++) {
        stk.push(i);
    }
    first = stk.pop();
    
    while (stk.length !== 0) {
        second = stk.pop();
        if (isKnown(relation, first, second))
            first = second;
    }
    
    for (var i = 0; i < count; i++) {
        if (first !== i && isKnown(relation, first, i))
            return -1;
        if (first !== i && isKnown(relation, i, first) === false)
            return -1;
    }
    return first;
}

function findCelebrity2(relation, count) {
    let first = 0;
    let second = 1;
    
    for (var i = 0; i < (count - 1); i++) {
        if (isKnown(relation, first, second))
            first = second;
        second = second + 1;
    }
    
    for (var i = 0; i < count; i++) {
        if (first !== i && isKnown(relation, first, i))
            return -1;
        if (first !== i && isKnown(relation, i, first) === false)
            return -1;
    }
    return first;
};

function test25() {
    const arr = [[1, 0, 1, 1, 0], 
    [1, 0, 0, 1, 0], 
    [0, 0, 1, 1, 1], 
    [0, 0, 0, 0, 0], 
    [1, 1, 0, 1, 1]];
    
    console.info(`Celebrity : ${findCelebrity(arr, 5)}`);
    console.info(`Celebrity : ${findCelebrity2(arr, 5)}`);
};

//test25()