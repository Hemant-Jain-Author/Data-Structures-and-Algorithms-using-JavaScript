// Towers Of Hanoi problem.
function tohUtil(num, from, to, temp)
{
	if (num < 1)
		return;
	tohUtil(num - 1, from, temp, to);
	console.log("Move disk " + num + " from peg " + from + " to peg " + to);
	tohUtil(num - 1, temp, to, from);
}

function toh(num)
{
	console.log("The sequence of moves involved in the Tower of Hanoi are :");
	tohUtil(num, 'A', 'C', 'B');
}

toh(3);