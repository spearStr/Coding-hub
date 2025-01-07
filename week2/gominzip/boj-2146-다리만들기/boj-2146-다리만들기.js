const fs = require("fs");
const [firstLine, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(firstLine);
const graph = rest.map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(graph) {
  let answer = Infinity;
  const labeledMap = Array.from({ length: N }, () => Array(N).fill(0));
  const islandInfo = []; // 각 섬의 좌표 목록 저장
  let id = 1;

  // 섬 묶어서 라벨링
  const labelIslands = (sx, sy, id) => {
    const temp = [];
    const queue = [[sx, sy]];
    labeledMap[sx][sy] = id;

    while (queue.length) {
      const [x, y] = queue.shift();
      temp.push([x, y]);

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < N &&
          graph[nx][ny] === 1 &&
          !labeledMap[nx][ny]
        ) {
          labeledMap[nx][ny] = id;
          queue.push([nx, ny]);
        }
      }
    }

    return temp;
  };

  // 섬 간 최소 거리 구하기
  const bfs = (id) => {
    const queue = [];
    const dist = Array.from({ length: N }, () => Array(N).fill(-1));

    // 해당 섬의 모든 좌표를 큐에 넣고 거리 초기화
    islandInfo[id].forEach(([x, y]) => {
      dist[x][y] = 0;
      queue.push([x, y]);
    });

    while (queue.length) {
      const [x, y] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          // 다른 섬을 만났을 때
          if (labeledMap[nx][ny] && labeledMap[nx][ny] !== id) {
            return dist[x][y];
          } else if (!labeledMap[nx][ny] && dist[nx][ny] === -1) {
            // 바다인 경우
            dist[nx][ny] = dist[x][y] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
    return Infinity;
  };

  // 섬 구분하기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1 && !labeledMap[i][j]) {
        const islandCells = labelIslands(i, j, id);
        islandInfo[id] = islandCells; // 각 섬의 좌표 정보 저장
        id++;
      }
    }
  }

  // 최소 거리 찾기
  for (let i = 1; i < id; i++) {
    answer = Math.min(answer, bfs(i));
    if (answer === 1) return answer;
  }

  return answer;
}

console.log(solution(graph));
