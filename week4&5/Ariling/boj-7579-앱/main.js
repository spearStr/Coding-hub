const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// 처음에 이분탐색으로 했다가 최적해 때문에 망... 이건 냅색이라고 한다..
const [count, needMemory] = firstLine.split(" ").map(Number);
const byteArr = input[0].split(" ").map(Number);
const rateArr = input[1].split(" ").map(Number);
byteArr.unshift(0);
rateArr.unshift(0);
function solution() {
  const rateSum = rateArr.reduce((a, b) => a + b, 0);
  let result = rateArr.reduce((a, b) => a + b, 0);
  const dp = Array(count + 1)
    .fill()
    .map(() => Array(rateSum + 1).fill(0));
  for (let i = 1; i <= count; i++) {
    const byte = byteArr[i];
    const rate = rateArr[i];
    for (let j = 0; j <= rateSum; j++) {
      if (j < rate) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(byte + dp[i - 1][j - rate], dp[i - 1][j]);
      }
      if (dp[i][j] >= needMemory) {
        result = Math.min(result, j);
      }
    }
  }
  needMemory !== 0 ? console.log(result) : console.log(0);
}
solution();
