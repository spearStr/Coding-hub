const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [T, W] = input[0];
const drops = input.slice(1).flat();

function getMaxPlums(T, W, drops) {
  const dp = Array.from({length: T + 1}, () => Array(W + 1).fill(0));

  for (let t = 1; t <= T; t++) {
    let tree = drops[t - 1];

    for (let w = 0; w <= W; w++) {
      let currentPosition = w % 2 === 0 ? 1 : 2; // 짝수번 이동 -> 1번 나무, 홀수번 이동 -> 2번 나무
      let get = currentPosition === tree ? 1 : 0;

      if (w === 0) {
        dp[t][w] = dp[t - 1][w] + get; // 이동할 수 없는 경우
      } else {
        dp[t][w] = Math.max(dp[t - 1][w], dp[t - 1][w - 1]) + get;
      }
    }
  }
  return Math.max(...dp[T]);
}

console.log(getMaxPlums(T, W, drops));
