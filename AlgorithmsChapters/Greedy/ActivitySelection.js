// Prints a maximum set of activities that can be done by a 
// single person performing one task at a time.
// s[] is an array that contains start time of all activities
// f[] is an array that contains finish time of all activities

class Activity {
	constructor(s, f) {
		this.start = s;
		this.stop = f;
	}
}

function maxActivities(s, f, n) {
	const act = Array(n).fill(0);
	for (let i = 0; i < n; i++)
		act[i] = new Activity(s[i], f[i]);

	act.sort(function(a, b)	{return a.stop - b.stop;});	// sort according to finish time.
	let i = 0;
	// The first activity at index 0 is always gets selected.
	let output = "Activities are : (" + act[i].start + "," + act[i].stop + ")";
	for (let j = 1; j < n; j++) {
		// Find next activity whose start time is greater than or equal
		// to the finish time of previous activity.
		if (act[j].start >= act[i].stop) {
			output += ", (" + act[j].start + "," + act[j].stop + ")";
			i = j;
		}
	}
	console.log(output)
}

/* Testing Code */
const s = [1, 5, 0, 3, 5, 6, 8];
const f = [2, 6, 5, 4, 9, 7, 9];
const n = s.length;
maxActivities(s, f, n);

/*
Activities are : (1,2), (3,4), (5,6), (6,7), (8,9)
*/
