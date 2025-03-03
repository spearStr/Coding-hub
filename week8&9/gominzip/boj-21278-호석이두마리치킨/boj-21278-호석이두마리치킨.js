const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, M] = input[0];
const edges = input.slice(1);

const INF = Infinity;
const graph = Array.from({length: N + 1}, () => Array(N + 1).fill(INF));

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

for (let [n1, n2] of edges) {
  graph[n1][n2] = 1;
  graph[n2][n1] = 1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

let minCost = INF;
let answerComb = [];

for (let i = 1; i < N; i++) {
  for (let j = i + 1; j <= N; j++) {
    let cost = 0;
    for (let target = 1; target <= N; target++) {
      cost += Math.min(graph[i][target], graph[j][target]);
    }
    if (cost < minCost) {
      minCost = cost;
      answerComb = [i, j];
    }
  }
}

console.log(...answerComb, minCost * 2);
