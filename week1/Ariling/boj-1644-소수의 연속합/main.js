function solution(input) {
  let prime_arr = [];
  let count = 0;
  let start = 0;
  function find_prime(num) {
    let arr = [...Array(input + 1).keys()];
    let end = Math.pow(num, 1 / 2);
    for (let x = 2; x < end + 1; x++) {
      if (arr[x] === 0) {
        continue;
      }
      for (let y = x * x; y < arr.length; y += x) {
        arr[y] = 0;
      }
    }
    for (let x = 2; x < arr.length; x++) {
      if (arr[x] === x) {
        prime_arr.push(x);
      }
    }
  }
  find_prime(input);
  console.log(prime_arr);
  while (start < prime_arr.length) {
    let sum = 0;
    for (let x = start; x < prime_arr.length; x++) {
      sum += prime_arr[x];
      if (sum >= input) {
        break;
      }
    }
    if (sum === input) {
      count++;
    }
    start++;
  }
  console.log(count);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", (line) => {
  n = parseInt(line);
  rl.close();
}).on("close", () => {
  solution(n);
  process.exit();
});
