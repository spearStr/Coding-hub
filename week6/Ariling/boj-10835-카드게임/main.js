const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(firstLine);
const leftArr = input[0].split(" ").map(Number);
const rightArr = input[1].split(" ").map(Number);
leftArr.unshift(0);
rightArr.unshift(0);
// 0번부터 위라고 하자..
// 왼쪽 카드만 통에 버릴 수 있다. 둘 다 통에 버릴 수도 있다. 이 때 얻는 점수는 없다.
// 오른쪽 카드에 적힌 수가 왼쪽보다 작은 경우 오른쪽 카드만 통에 버리기 가능, 이럴 땐 오른쪽 점수를 얻을 수 있다.
// 어느 쪽이든 남은게 없다면 카드 게임이 끝난다.
// 43퍼에서 막히네...
function solution() {
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(N + 1).fill(-1));
  let result = 0;
  function play(left, right) {
    if (left === N + 1 || right === N + 1) return 0;
    if (dp[left][right] !== -1) return dp[left][right];
    let score = 0;
    if (leftArr[left] > rightArr[right]) {
      score = Math.max(score, play(left, right + 1) + rightArr[right]);
    }
    score = Math.max(score, play(left + 1, right), play(left + 1, right + 1));
    return (dp[left][right] = score);
  }
  // 각 왼쪽 혹은 오른쪽이 끝날을 때 최댓값 구하기
  console.log(play(1, 1));
}
solution();
