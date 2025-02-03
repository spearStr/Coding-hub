const fs = require("fs");
let [firstLine, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = firstLine.split(" ").map(Number);
inputs = inputs.map((i) => i.split(" ").map(Number));

function solution(N, M, inputs) {
  const dependencies = Array.from({length: N + 1}, () => new Set());
  const inDegree = Array(N + 1).fill(0);

  for (const input of inputs) {
    for (let i = 1; i < input[0]; i++) {
      const current = input[i + 1];
      const prev = input[i];

      if (!dependencies[prev].has(current)) {
        dependencies[prev].add(current); // 선행 노드의 의존성에 추가
        inDegree[current]++;
      }
    }
  }

  const queue = [];
  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let next of dependencies[node]) {
      inDegree[next]--;
      if (!inDegree[next]) queue.push(next);
    }
  }

  return result.length === N ? result.join("\n") : 0;
}

console.log(solution(N, M, inputs));
