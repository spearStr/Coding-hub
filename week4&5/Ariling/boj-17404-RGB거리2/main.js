const fs = require("fs");
const [firstline, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// dp를 활용할 것 같은 강한 느낌..
const n = parseInt(firstline);
const arr = input.map((line) => line.split(" ").map(Number));
let ans = Infinity;
// 1번은 2번과 N번이 같으면 안되고
// 나머지는 앞뒤로 같으면 안된다.
// 예를 들어 i번째가 1이면 3 1 2 / 2 1 3 , 1 2 3 / 3 2 1 , 1 3 2 / 2 3 1

function solution(arr) {
  for (let j = 0; j < 3; j++) {
    const dp = Array(n)
      .fill()
      .map(() => Array(3).fill(Infinity));
    dp[0][j] = arr[0][j];
    for (let i = 1; i < n; i++) {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0]; // 이 경우는 다음이 무조건 1 아님 2
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1]; // 이 경우는 다음이 무조건 0 아님 2
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2]; // 이 경우는 다음이 무조건 0 아님 1
    }
    for (let i = 0; i < 3; i++) {
      if (i !== j) {
        ans = Math.min(ans, dp[n - 1][i]);
      }
    }
  }
  console.log(ans);
}

solution(arr);
