function NQueens(Q, k, n) {
	if (k === n) {
		console.log(Q.toString());
		return;
	}
	for (let i = 0; i < n; i++) {
		Q[k] = i;
		if (Feasible(Q, k)) {
			NQueens(Q, k + 1, n);
		}
	}
};

function Feasible(Q, k) {
	for (let i = 0; i < k; i++) {
		if (Q[k] === Q[i] || Math.abs(Q[i] - Q[k]) === Math.abs(i - k)) {
			return false;
		}
	}
	return true;
};

const Q = new Array(8);
NQueens(Q, 0, 8);

function TOHUtil(num, from, to, temp) {
	if (num < 1) {
		return;
	}
	TOHUtil(num - 1, from, temp, to);
	console.log(`Move disk ${num} from peg ${from} to peg ${to}`);
	TOHUtil(num - 1, temp, to, from);
};

function TowersOfHanoi(num) {
	console.log("The sequence of moves involved in the Tower of Hanoi are :");
	TOHUtil(num, 'A', 'C', 'B');
};

TowersOfHanoi(3);