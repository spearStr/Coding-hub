const fs = require("fs");
let [N, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map((v) => v.split(" ").map(Number));

function solution(N, inputs) {
  let minCost = [];
  const dp = Array.from(Array(N), () => Array(3).fill(0));
  for (let c = 0; c < 3; c++) {
    dp[0] = [Infinity, Infinity, Infinity];
    dp[0][c] = inputs[0][c]; // 1번째 집의 색 고정
    for (let i = 1; i < N; i++) {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + inputs[i][0];
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + inputs[i][1];
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + inputs[i][2];
    }
    // 1번째 집과 색이 다른 N번째 집의 비용만 필터링
    minCost.push(...dp[N - 1].filter((_, i) => i !== c));
  }

  return Math.min(...minCost);
}

console.log(solution(N, inputs));
