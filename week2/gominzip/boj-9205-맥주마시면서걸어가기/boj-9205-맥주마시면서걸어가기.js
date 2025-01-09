const fs = require("fs");
let [t, ...lines] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

t = Number(t);
let idx = -1;
const infos = Array.from({ length: t }, () => []);

for (let line of lines) {
  let info = line.split(" ").map(Number);
  if (info.length === 1) idx++;
  else if (info.length === 2) infos[idx].push(info);
}

const MAX_DISTANCE = 20 * 50;

function solution(infos) {
  let answer = [];

  for (let info of infos) {
    const home = info.shift();
    const pentaport = info.pop();
    const stores = info;

    const queue = [home];
    const visited = Array(stores.length).fill(false);

    let canReach = false;

    while (queue.length > 0) {
      const current = queue.shift();

      // 페스티벌에 도달 가능한 경우
      if (getDistance(current, pentaport) <= MAX_DISTANCE) {
        canReach = true;
        break;
      }

      // 편의점 확인
      for (let i = 0; i < stores.length; i++) {
        if (!visited[i] && getDistance(current, stores[i]) <= MAX_DISTANCE) {
          visited[i] = true;
          queue.push(stores[i]);
        }
      }
    }

    answer.push(canReach ? "happy" : "sad");
  }
  return answer.join("\n");
}

function getDistance(n1, n2) {
  return Math.abs(n1[0] - n2[0]) + Math.abs(n1[1] - n2[1]);
}

console.log(solution(infos));
