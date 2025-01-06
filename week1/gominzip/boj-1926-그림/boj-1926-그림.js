const fs = require("fs");
const [nm, ...infos] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = nm.split(" ").map(Number);

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(n, m, infos) {
  let count = 0;
  let maxSize = 0;

  const canvas = infos.map((info) => info.split(" ").map(Number));
  const visited = Array.from(Array(n), () => Array(m).fill(false));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (canvas[y][x] === 1 && !visited[y][x]) {
        const group = DFS(y, x, n, m, canvas);

        // 탐색 완료한 좌표 업데이트
        for (member of group) {
          const [my, mx] = member.split(" ").map(Number);
          visited[my][mx] = true;
        }

        count++;
        maxSize = Math.max(maxSize, group.size);
      }
    }
  }

  return [count, maxSize].join("\n");
}

function DFS(cy, cx, n, m, canvas) {
  // 같은 그룹인 좌표("y x") 저장
  const visited = new Set();

  function explore(y, x) {
    visited.add([y, x].join(" "));

    for ([dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx];
      if (
        0 <= ny &&
        ny < n &&
        0 <= nx &&
        nx < m &&
        canvas[ny][nx] === 1 &&
        !visited.has([ny, nx].join(" "))
      )
        explore(ny, nx);
    }
  }

  explore(cy, cx);

  return visited;
}

console.log(solution(n, m, infos));
