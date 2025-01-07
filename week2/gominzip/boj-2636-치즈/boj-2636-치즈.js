const fs = require("fs");
const [firstLine, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = firstLine.split(" ").map(Number);
const cheese = rest.map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(N, M, cheese) {
  let time = 0;
  let lastCheeseCount = 0;

  while (true) {
    const meltList = findMelt(N, M, cheese);
    if (meltList.length === 0) break;

    meltCheese(cheese, meltList);
    lastCheeseCount = meltList.length;
    time++;
  }

  return [time, lastCheeseCount].join("\n");
}

// 녹일 치즈 찾기
function findMelt(N, M, cheese) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const queue = [[0, 0]];
  visited[0][0] = true;
  const meltList = [];

  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
        visited[nx][ny] = true;
        if (cheese[nx][ny] === 0) {
          queue.push([nx, ny]);
        } else if (cheese[nx][ny] === 1) {
          meltList.push([nx, ny]);
        }
      }
    }
  }
  return meltList;
}

// 치즈 녹이기
function meltCheese(cheese, meltList) {
  for (const [x, y] of meltList) {
    cheese[x][y] = 0;
  }
}

console.log(solution(N, M, cheese));
