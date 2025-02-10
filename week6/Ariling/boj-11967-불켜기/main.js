const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = firstLine.split(" ").map(Number);
// 저 위치들을 담는 그걸 만들어야 하는데...
const lightArr = Array(N)
  .fill()
  .map(() => Array(N).fill(0));
const graph = Array(N)
  .fill()
  .map(() =>
    Array(N)
      .fill()
      .map(() => [])
  );
// 연결들 위치 담기
for (let i = 0; i < M; i++) {
  const [x, y, a, b] = input[i].split(" ").map(Number);
  graph[x - 1][y - 1].push([a - 1, b - 1]);
}

function solution() {
  const q = [[0, 0]];
  lightArr[0][0] = 1;
  const visited = Array(N)
    .fill()
    .map(() => Array(N).fill(false));
  visited[0][0] = true; // 시작 위치 방문 처리
  let result = 1;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (q.length > 0) {
    const [r, c] = q.shift();
    for (let i = 0; i < graph[r][c].length; i++) {
      const [tr, tc] = graph[r][c][i];
      if (lightArr[tr][tc] === 0) {
        lightArr[tr][tc] = 1; // 새로 불 켜기
        result++;
        for (const [dr, dc] of directions) {
          // 4방향 연결된 곳을 여기서 찾아야 함...
          const [R, C] = [tr + dr, tc + dc];
          if (0 <= R && R < N && 0 <= C && C < N && visited[R][C]) {
            q.push([R, C]); // 방문한 적 있으면 새로 연결되어 또 순회할 수 있으므로
          }
        }
      }
    }
    for (const direction of directions) {
      const [newR, newC] = [r + direction[0], c + direction[1]];
      if (
        0 <= newR &&
        newR < N &&
        0 <= newC &&
        newC < N &&
        !visited[newR][newC] &&
        lightArr[newR][newC] === 1
      ) {
        q.push([newR, newC]);
        visited[newR][newC] = true;
      }
    }
  }
  console.log(result);
}
solution();
