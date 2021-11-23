function isPrime(n)
{
	let answer = (n > 1) ? true : false;
	for (let i = 2; i * i <= n; ++i)
	{
		if (n % i == 0)
		{
			answer = false;
			break;
		}
	}
	return answer;
}

console.log(isPrime(7));

/*
true
*/