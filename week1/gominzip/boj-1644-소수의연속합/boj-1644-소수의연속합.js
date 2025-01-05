const fs = require("fs");
let N = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

N = Number(N);

function solution(N) {
  const primes = getPrimeNumbers(N);

  if (primes.length === 0 || (primes.length === 1 && primes[0] !== N)) return 0;
  if (primes[0] === N) return 1;

  let count = 0;
  let start = 0;
  let end = 1;
  let result = primes[start] + primes[end];

  while (start <= end && end < primes.length) {
    if (result === N) {
      count++;
      result -= primes[start];
      start++;
    } else if (result < N) {
      end++;
      result += primes[end];
    } else {
      result -= primes[start];
      start++;
    }
  }

  return count;
}

function getPrimeNumbers(N) {
  if (N < 2) return [];

  const isPrime = Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  const primes = [];

  for (let i = 2; i <= N; i++) {
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return primes;
}

console.log(solution(N));
