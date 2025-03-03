const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M, L, K] = firstLine.split(" ").map(Number);
const points = [];
let bounce = 0;
for (let i = 0; i < K; i++) {
  const [r, c] = input[i].split(" ").map(Number);
  points.push([r, c]);
}
for (const pointA of points) {
  for (const pointB of points) {
    // A와 B를 기준으로 그물을 만들고 각 point들이 들어가있는지 확인하기
    let count = 0;
    for (const pointC of points) {
      if (
        pointA[0] <= pointC[0] &&
        pointC[0] <= pointA[0] + L &&
        pointB[1] <= pointC[1] &&
        pointC[1] <= pointB[1] + L
      )
        count += 1;
      if (count > bounce) bounce = count;
    }
  }
}
console.log(K - bounce);
