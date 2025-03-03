const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, M] = input[0];
const graph = [Array(N + 1).fill(0), ...input.slice(1, N + 1).map((row) => [0, ...row])];

const partyInfos = input.slice(N + 1);

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) continue;
      if (graph[i][k] && graph[k][j]) {
        graph[i][j] = Math.min(graph[i][j] || Infinity, graph[i][k] + graph[k][j]);
      }
    }
  }
}

let answer = [];
for (const [a, b, c] of partyInfos) {
  if (graph[a][b] <= c) answer.push("Enjoy other party");
  else answer.push("Stay here");
}

console.log(answer.join("\n"));
