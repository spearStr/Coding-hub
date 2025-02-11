const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [[N], A, B] = input.map((v) => v.split(" ").map(Number));
const dp = Array.from({length: N + 1}, () => Array(N + 1).fill(-1));

function game(a, b) {
  if (a === N || b === N) return 0; // 더미가 비면 종료
  else if (dp[a][b] != -1) return dp[a][b]; // 방문한곳은 계산된 값 반환

  if (A[a] > B[b]) return (dp[a][b] = B[b] + game(a, b + 1)); // 오른쪽 카드 버리기
  else return (dp[a][b] = Math.max(game(a + 1, b), game(a + 1, b + 1)));
}

game(0, 0);
console.log(dp[0][0]);
