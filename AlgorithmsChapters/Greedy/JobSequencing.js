class Job
{
	constructor(id, deadline, profit)
	{
		this.id = id;
		this.deadline = deadline;
		this.profit = profit;
	}
}

class JobSequencing
{
	constructor(ids, deadlines, profits, n)
	{
		this.jobs = Array(n).fill(null);
		this.n = n;
		this.maxDL = deadlines[0];
		for (var i = 1; i < n; i++)
		{
			if (deadlines[i] > this.maxDL)
			{
				this.maxDL = deadlines[i];
			}
		}
		for (var i = 0; i < n; i++)
		{
			this.jobs[i] = new Job(ids[i], deadlines[i], profits[i]);
		}
	}

	print()
	{
		this.jobs.sort(function (a, b){return b.profit - a.profit});
		var result = Array(this.maxDL).fill(false);
		var job = Array(this.maxDL).fill(' ');
		var profit = 0;
		// Iterate through all given jobs
		for (var i = 0; i < this.n; i++)
		{
			for (var j = this.jobs[i].deadline - 1; j >= 0; j--)
			{
				if (result[j] == false)
				{
					result[j] = true;
					job[j] = this.jobs[i].id;
					profit += this.jobs[i].profit;
					break;
				}
			}
		}
		console.log("Profit is :: " + profit);
		
		var output = "Jobs selected are::";
		for (var i = 0; i < this.maxDL; i++)
		{
			if (job[i] != '')
			{
				output += " " + job[i];
			}
		}
		console.log(output);
	}
}
var id = ['a', 'b', 'c', 'd', 'e'];
var deadline = [3, 1, 2, 4, 4];
var profit = [50, 40, 27, 31, 30];
var js =  new JobSequencing(id, deadline, profit, 5);
js.print();

/*
Profit is :: 151
Jobs selected are:: b e a d
*/