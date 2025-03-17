const fs = require("fs");
let [N, nums] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const target = nums.pop();
const dp = Array.from({length: N - 1}, () => Array(21).fill(BigInt(0)));

dp[0][nums[0]] = BigInt(1);

for (let i = 1; i < N - 1; i++) {
  const curr = nums[i];
  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j] > 0) {
      if (j + curr <= 20) dp[i][j + curr] += dp[i - 1][j];
      if (j - curr >= 0) dp[i][j - curr] += dp[i - 1][j];
    }
  }
}

console.log(dp[N - 2][target].toString());
