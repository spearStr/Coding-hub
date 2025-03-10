const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [node, guest] = firstLine.split(" ").map(Number);
const graph = Array(node + 1)
  .fill()
  .map(() => Array(node + 1).fill(Infinity));

for (let i = 0; i < node; i++) {
  const info = input[i].split(" ").map(Number);
  for (let j = 0; j < node; j++) {
    graph[i + 1][j + 1] = info[j];
  }
}

for (let k = 1; k <= node; k++) {
  for (let i = 1; i <= node; i++) {
    for (let j = 1; j <= node; j++) {
      if (graph[i][j] > graph[k][j] + graph[i][k]) {
        graph[i][j] = graph[k][j] + graph[i][k];
      }
    }
  }
}

for (let i = 0; i < guest; i++) {
  // 출발, 도착, 시간순
  const [st, ed, time] = input[i + node].split(" ").map(Number);
  if (graph[st][ed] <= time) console.log("Enjoy other party");
  else console.log("Stay here");
}
