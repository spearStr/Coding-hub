const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [T, W] = firstLine.split(" ").map(Number);
const arr = [0];
for (let i = 0; i < T; i++) {
  const num = parseInt(input[i]);
  arr.push(num);
}
const dp = Array(W + 1)
  .fill()
  .map(() => Array(T + 1).fill(0));
// 0번은 그냥 홀수 인 것만 더해주기
for (let i = 1; i <= T; i++) {
  dp[0][i] = dp[0][i - 1] + (arr[i] === 1 ? 1 : 0);
}
for (let i = 1; i <= W; i++) {
  for (let j = 1; j <= T; j++) {
    // 홀수일때는 짝수가 1을 더하고 짝수일때는 홀수일때 1을 더해야하는데..
    const tree_num =
      (arr[j] % 2 === 1 && i % 2 === 0) || (arr[j] % 2 === 0 && i % 2 === 1)
        ? 1
        : 0;
    dp[i][j] = Math.max(dp[i - 1][j] + tree_num, dp[i][j - 1] + tree_num);
  }
}
console.log(dp[W][T]);
