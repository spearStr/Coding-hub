const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const infos = rest.map((r) => r.split(" ").map(Number));
const direction = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

const squareDirection = [
  [0, 1],
  [1, 0],
  [1, 1],
];

function solution(infos) {
  let answer = 0;
  const grid = Array.from({ length: 101 }, () => Array(101).fill(0));
  const visited = [];

  const drawDragonCurve = () => {
    for (let [x, y, d, g] of infos) {
      let queue = [d]; // 초기 시작 방향으로 초기화
      let history = [];

      if (!grid[y][x]) {
        grid[y][x] = 1;
        visited.push([y, x]);
      }

      for (let i = 0; i <= g; i++) {
        // 0~g세대만큼 진행
        while (queue.length) {
          // 역순으로 진행
          const cd = queue.pop();
          history.push(cd);

          [y, x] = [y + direction[cd][0], x + direction[cd][1]];

          if (!grid[y][x]) {
            grid[y][x] = 1;
            visited.push([y, x]);
          }
        }

        // 90도 회전해 그리기 위해 다음 방향으로 변경
        queue = history.map((h) => (h + 1) % 4);
      }
    }
  };

  const findSquare = () => {
    for (const [y, x] of visited) {
      let isSqure = true;
      for (const [dy, dx] of squareDirection) {
        const [ny, nx] = [y + dy, x + dx];
        if (ny > 100 || nx > 100 || grid[ny][nx] !== 1) {
          isSqure = false;
          break;
        }
      }
      if (isSqure) answer++;
    }
  };

  drawDragonCurve();
  findSquare();
  return answer;
}

console.log(solution(infos));
