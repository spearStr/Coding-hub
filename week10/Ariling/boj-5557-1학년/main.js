const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = parseInt(firstLine);
const arr = input[0].split(" ").map(Number);
arr.unshift(0);
// 이거 그 계단식처럼 하는 것 같은데.. 중간에 나오는 수가 또 전부 양수여야 해? 음수 나오면 탈락이구나? 20이상도 안되네..?
const answer = arr.pop();
const dp = Array(arr.length)
  .fill()
  .map(() => Array(21).fill(BigInt(0)));
// 처음 값을 잘 설정하기
dp[1][arr[1]] = BigInt(1);
for (let i = 2; i < arr.length; i++) {
  const num = arr[i];
  for (let j = 0; j <= 20; j++) {
    if (j - num >= 0) {
      dp[i][j] += dp[i - 1][j - num];
    }
    if (j + num <= 20) {
      dp[i][j] += dp[i - 1][j + num];
    }
  }
}
console.log(dp[arr.length - 1][answer].toString());
