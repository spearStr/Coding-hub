const fs = require("fs");
const [firstline, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// 이거 순서가 있는건데 분명히... 이것도 위상정렬인 것 같은데...?
const info_arr = firstline.split(" ").map(Number);
const pd_info_arr = input.map((line) => line.split(" ").map(Number));
function solution(info_arr, pd_info_arr) {
  const graph = Array(info_arr[0] + 1)
    .fill()
    .map(() => []);
  const indegree = Array(info_arr[0] + 1).fill(0);
  const result_arr = [];
  for (let i = 0; i < pd_info_arr.length; i++) {
    const [cnt, ...info] = pd_info_arr[i];
    if (cnt > 1) {
      for (let j = 0; j < cnt - 1; j++) {
        graph[info[j]].push(info[j + 1]);
        indegree[info[j + 1]]++;
      }
    }
  }

  let q = [];
  for (let i = 1; i <= info_arr[0]; i++) {
    if (indegree[i] === 0) {
      q.push(i);
      result_arr.push(i);
    }
  }
  while (q.length > 0) {
    const current = q.shift();
    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      indegree[next]--;

      if (indegree[next] === 0) {
        q.push(next); // 진입차수 0이면 추가해주기
        result_arr.push(next);
      }
    }
  }
  // 출력하기
  if (result_arr.length === info_arr[0]) {
    for (const el of result_arr) {
      console.log(el);
    }
  } else {
    console.log(0);
  }
}

solution(info_arr, pd_info_arr);
