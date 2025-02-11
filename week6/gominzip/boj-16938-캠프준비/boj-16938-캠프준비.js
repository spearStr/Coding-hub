const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [[N, L, R, X], level] = input.map((v) => v.split(" ").map(Number));
level.sort((a, b) => a - b);

let answer = 0;

function dfs(startIdx, lastIdx, total) {
  if (L <= total && level[lastIdx] - level[startIdx] >= X) answer++;
  for (let i = lastIdx + 1; i < N; i++) {
    if (total + level[i] > R) break;
    dfs(startIdx, i, total + level[i]);
  }
}

for (let i = 0; i < N - 1; i++) {
  dfs(i, i, level[i]);
}

console.log(answer);
