const fs = require("fs");
let [N, ...inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.map((v) => v.split(" ").map(Number));

function solution(N, inputs) {
  const dependencies = Array.from({length: N + 1}, () => ({next: [], cost: 0}));
  const inDegree = Array(N + 1).fill(0);
  const answer = Array(N + 1).fill(0);

  inputs.forEach((input, idx) => {
    const num = idx + 1;
    dependencies[num].cost = input[0];
    for (let i = 1; i < input.length - 1; i++) {
      dependencies[input[i]].next.push(num);
      inDegree[num]++;
    }
  });

  const queue = [];
  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      answer[i] = dependencies[i].cost;
    }
  }

  while (queue.length) {
    const curr = queue.shift();

    for (let next of dependencies[curr].next) {
      inDegree[next]--;
      answer[next] = Math.max(answer[next], answer[curr] + dependencies[next].cost);
      if (!inDegree[next]) queue.push(next);
    }
  }

  return answer.slice(1).join("\n");
}

console.log(solution(N, inputs));
