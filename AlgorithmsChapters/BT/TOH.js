// Towers Of Hanoi problem.
function tohUtil(num, from, to, temp) {
	if (num < 1)
		return;
	tohUtil(num - 1, from, temp, to);
	console.log("Move disk " + num + " from peg " + from + " to peg " + to);
	tohUtil(num - 1, temp, to, from);
}

function toh(num) {
	console.log("The sequence of moves involved in the Tower of Hanoi are :");
	tohUtil(num, 'A', 'C', 'B');
}

// Testing code.
toh(3);

/*
The sequence of moves involved in the Tower of Hanoi are :
Move disk 1 from peg A to peg C
Move disk 2 from peg A to peg B
Move disk 1 from peg C to peg B
Move disk 3 from peg A to peg C
Move disk 1 from peg B to peg A
Move disk 2 from peg B to peg C
Move disk 1 from peg A to peg C
*/