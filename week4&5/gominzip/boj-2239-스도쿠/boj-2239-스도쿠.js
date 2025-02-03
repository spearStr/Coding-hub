const fs = require("fs");
let graph = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const list = [];
graph = graph.map((g, y) =>
  g.split("").map((v, x) => {
    v = Number(v);
    if (!v) list.push([y, x]);
    return v;
  })
);
// console.log(graph);
// console.log(list);

function check(v, y, x, graph) {
  for (let c = 0; c < 9; c++) {
    if (graph[y][c] === v) return false;
  }
  for (let r = 0; r < 9; r++) {
    if (graph[r][x] === v) return false;
  }
  for (let i = y - (y % 3); i < y - (y % 3) + 3; i++) {
    for (let j = x - (x % 3); j < x - (x % 3) + 3; j++) {
      if (graph[i][j] === v) return false;
    }
  }
  return true;
}

function backtracking(idx) {
  if (idx >= list.length) {
    return true;
  }

  const [y, x] = list[idx];

  for (let v = 1; v <= 9; v++) {
    if (check(v, y, x, graph)) {
      graph[y][x] = v;
      if (backtracking(idx + 1)) {
        return true;
      }
      graph[y][x] = 0;
    }
  }

  return false;
}

backtracking(0);

console.log(graph.map((row) => row.join("")).join("\n"));
