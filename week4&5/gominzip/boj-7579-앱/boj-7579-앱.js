const fs = require("fs");
let [NM, memory, cost] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = NM.split(" ").map(Number);
memory = memory.split(" ").map(Number);
cost = cost.split(" ").map(Number);

function solution(N, M, memory, cost) {
  const maxCost = cost.reduce((a, b) => a + b, 0);
  const dp = Array(maxCost + 1).fill(0);

  for (let i = 0; i < N; i++) {
    for (let j = maxCost; j >= cost[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - cost[i]] + memory[i]);
    }
  }

  for (let i = 0; i < dp.length; i++) {
    if (dp[i] >= M) return i;
  }
  return -1;
}

console.log(solution(N, M, memory, cost));
