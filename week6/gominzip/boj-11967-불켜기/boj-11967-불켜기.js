const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [[N, _], ...infos] = input.map((v) => v.split(" ").map(Number));

const isLightOn = Array.from({length: N + 1}, () => Array(N + 1).fill(false));
const visited = Array.from({length: N + 1}, () => Array(N + 1).fill(false));

const switchs = Array.from({length: N + 1}, () =>
  Array(N + 1)
    .fill(null)
    .map(() => [])
);

infos.forEach(([x, y, a, b]) => switchs[x][y].push([a, b]));

const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

// 1,1에서 시작
isLightOn[1][1] = true;
visited[1][1] = true;
let lightOnCount = 1;
const queue = [[1, 1]];

while (queue.length) {
  const [cx, cy] = queue.shift();

  // 현재 방에서 불 켜기
  for (const [nx, ny] of switchs[cx][cy]) {
    if (!isLightOn[nx][ny]) {
      isLightOn[nx][ny] = true;
      lightOnCount++;

      // 불이 켜진 방이 기존 방문한 방과 연결되면 이동 가능
      for (const [dx, dy] of dir) {
        const adjX = nx + dx,
          adjY = ny + dy;
        if (adjX >= 1 && adjY >= 1 && adjX <= N && adjY <= N && visited[adjX][adjY]) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          break;
        }
      }
    }
  }

  // 4방향 탐색
  for (const [dx, dy] of dir) {
    const nx = cx + dx,
      ny = cy + dy;
    if (nx < 1 || ny < 1 || nx > N || ny > N || visited[nx][ny] || !isLightOn[nx][ny]) continue;

    queue.push([nx, ny]);
    visited[nx][ny] = true;
  }
}

console.log(lightOnCount);
