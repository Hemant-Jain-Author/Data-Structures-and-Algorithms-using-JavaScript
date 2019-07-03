function fibonacci (n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacci2 (n) {
  let first = 0;
  let second = 1;
  let temp = 0;

  if (n === 0)
    return first
  else if (n === 1)
    return second
  
  let i = 2;
  while (i <= n) {
    temp = first + second
    first = second
    second = temp
    i += 1
  }
  return temp
}

function test1 () {
  console.log(fibonacci(5))
  console.log(fibonacci2(5))
}

//test1()

function Feasible (Q, k) {
  for (let i = 0; i < k; i++) {
    if (Q[k] === Q[i] || Math.abs(Q[i] - Q[k]) === Math.abs(i - k)) {
      return false
    }
  }
  return true
}

function NQueens (Q, k, n) {
  if (k === n) {
    console.log(Q)
    return
  }

  for (let i = 0; i < n; i++) {
    Q[k] = i
    if (Feasible(Q, k)) {
      NQueens(Q, k + 1, n)
    }
  }
}

function test2 () {
  const Q = [0, 0, 0, 0, 0, 0, 0, 0];
  NQueens(Q, 0, 8)
}
/*
[ 0, 4, 7, 5, 2, 6, 1, 3 ]
[ 0, 5, 7, 2, 6, 3, 1, 4 ]
.
.
.

[ 7, 3, 0, 2, 5, 1, 6, 4 ]
*/
//test2()

function TOHUtil (num, from, to, temp) {
  if (num < 1) {
    return
  }
  TOHUtil(num - 1, from, temp, to)
  console.log(`Move disk ${num} from peg ${from} to peg ${to}`)
  TOHUtil(num - 1, temp, to, from)
}

function TowersOfHanoi (num) {
  console.log('The sequence of moves involved in the Tower of Hanoi are :')
  TOHUtil(num, 'A', 'C', 'B')
}

function test3 () {
  TowersOfHanoi(3)
}

//test3()

function isPrime (n) {
  let answer = (n > 1) ? true : false;

  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      answer = false
      break
    }
  }
  return answer
}

function test4 () {
  console.log(isPrime(101))
  console.log(isPrime(103))
  console.log(isPrime(105))
}

//test4()