const fs = require("fs");
const [firstLine, input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, L, R, X] = firstLine.split(" ").map(Number);
// const infoArr = input.map((line) => line.split(" ").map(Number));
const infoArr = input.split(" ").map(Number);
infoArr.sort((a, b) => a - b);
let count = 0;
// 조합 맞잖아...
function solution() {
  dfs(0, 0, []);
  console.log(count);
}
function dfs(idx, diff, arr) {
  if (diff > R) return;
  if (arr.length >= 2) {
    if (diff >= L && diff <= R) {
      const compare = arr[arr.length - 1] - arr[0];
      if (compare >= X) count++;
    }
  }
  for (let i = idx; i < N; i++) {
    arr.push(infoArr[i]);
    dfs(i + 1, diff + infoArr[i], arr);
    arr.pop();
  }
}
solution();
