const fs = require("fs");
let [N, arr] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

arr.sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < N; i++) {
  let value = arr[i];
  while (value > 0) {
    if (value % 2 === 0) {
      value = Math.floor(value / 2);
      if (i === 0) answer++;
    } else {
      value = value - 1;
      answer++;
    }
  }
}

console.log(answer);
