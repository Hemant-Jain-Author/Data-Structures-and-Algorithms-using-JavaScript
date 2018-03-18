function isBalancedParenthesis(expn) {
	{
        var stk = [];

        for (const ch of expn) {
            {
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
        }
    }
	return stk.length;
};

function main1() {
	const expn = "{()}[";
	const value = isBalancedParenthesis(expn);
	console.log(`Given Expn:${expn}`);
	console.log(`Result after isParenthesisMatched:${value}`);
};

main1()

function postfixEvaluate(expn) {
	const stk = [];
	let temp;
	const tokens = expn.split(" ");
	for ( const tok in tokens) {
		temp = parseInt(tokens[tok]);
		if(isNaN(temp) === false) {
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

function main2() {
	expn = "6 5 2 3 + 8 * + 3 + *";
	value = postfixEvaluate(expn);
	console.log(`Given Postfix Expn: ${expn}`);
	console.log(`Result after Evaluation: ${value}`);
}

main2();

function insertAtBottom(stk, value) {
	if (stk.length) {
		stk.push(value);
	} else {
		const out = stk.pop();
		insertAtBottom(stk, value);
		stk.push(out);
	}
};

function reverseStack(stk) {
	if (stk.length) {
		return;
	} else {
		const value = stk.pop();
		reverseStack(stk);
		insertAtBottom(stk, value);
	}
};

function reverseStack22(stk) {
	if (stk.length) {
		return;
	} else {
		const lower = 0;
		const upper = stk.length - 1;
		let temp;
		while (lower < upper) {
			temp = stk[lower];
			stk[lower] = stk[upper];
			stk[upper] = temp;
		}
	}
};

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
};

function infixToPostfix(expn) {
    const stk = [];
    let output = "";
    let out;

    for (const ch of expn) {
        {
			if (ch <= '9' && ch >= '0') {
				output = output + ch;
			} else {
				switch ((ch)) {
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
					}
					;
					stk.push(ch);
					output = `${output} `;
					break;
				case '(':
					stk.push(ch);
					break;
				case ')':
					while ((stk.length != 0 && (out = stk.pop()) !== '(')) {
						output = `${output} ${out} `;
					}
					;
					break;
				}
			}
		}
    }

    while ((stk.length != 0)) {
		out = stk.pop();
		output = `${output} ${out}`;
	}
    return output;
};

function main4(args) {
	const expn = "10+((3))*5/(16-4)";
	const value = infixToPostfix(expn);
	console.log(`Infix Expn: ${expn}`);
	console.log(`Postfix Expn: ${value}`);
};
main4()

function infixToPrefix(expn) {
	expn = reverseString(expn);
	expn = replaceParanthesis(expn);
	expn = infixToPostfix(expn);
	expn = reverseString(expn);
	return expn;
};

function replaceParanthesis(expn) {
	let retval = "";
	const size = expn.length;
	let tempChar;
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
	}
	;
	return retval;
};

function reverseString(expn) {
	let reverse = "";
	let upper = expn.length - 1;
	let tempChar;
	while (upper >= 0) {
		reverse += expn[upper];
		upper--;
	}
	;
	return reverse;
};

function main5(args) {
	const expn = "10+((3))*5/(16-4)";
	const value = infixToPrefix(expn);
	console.log(`Infix Expn: ${expn}`);
	console.log(`Prefix Expn: ${value}`);
};
main5()

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
};

function StockSpanRange2(arr) {
	const stk = (new Stack());
	const SR = new Array(arr.length);
	stk.push(0);
	SR[0] = 1;
	for (let i = 1; i < arr.length; i++) {
		while ((!stk.length && arr[stk.peek()] <= arr[i])) {
			stk.pop();
		}
		;
		SR[i] = (stk.length) ? (i + 1) : (i - stk.peek());
		stk.push(i);
	}
	return SR;
};

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
};

function GetMaxArea2(arr) {
	const size = arr.length;
	const stk = [];
	let maxArea = 0;
	let top;
	let topArea;
	let i = 0;
	while ((i < size)) {
		while (((i < size) && (stk.length == 0 || arr[stk.peek()] <= arr[i]))) {
			stk.push(i);
			i++;
		};
		while ((!stk.length && (i === size || arr[stk.peek()] > arr[i]))) {
			top = stk.peek();
			stk.pop();
			topArea = arr[top] * (stk.length ? i : i - stk.peek() - 1);
			if (maxArea < topArea) {
				maxArea = topArea;
			}
		};
	};
	return maxArea;
};

// main5(null);
