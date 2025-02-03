const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// 이것도 전제조건이 있는거 봐서 위상정렬인 것 같다...
const building = parseInt(firstLine);
const building_info = input.map((line) => line.split(" ").map(Number));
function solution(building, building_info) {
  const graph = Array(building + 1)
    .fill()
    .map(() => []);
  const indegree = Array(building + 1).fill(0);
  // 짓는 시간과 걸리는 시간은 따로 분리해야 할 것
  const building_time = Array(building + 1).fill(0);
  const total_time = Array(building + 1).fill(0);
  // 진입 지수 및 그래프 업데이트 하기
  for (let i = 0; i < building_info.length; i++) {
    const [time, ...info] = building_info[i];
    building_time[i + 1] = time;
    total_time[i + 1] = time;
    if (info.length > 1) {
      for (let j = 0; j < info.length - 1; j++) {
        graph[info[j]].push(i + 1);
        indegree[i + 1]++;
      }
    }
  }
  // 진입 차수 0 인것을 넣기
  let q = [];
  for (let i = 1; i <= building; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }
  while (q.length > 0) {
    const current = q.shift();
    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      indegree[next]--;
      total_time[next] = Math.max(
        total_time[next],
        building_time[next] + total_time[current]
      );
      if (indegree[next] === 0) {
        q.push(next);
      }
    }
  }
  for (const time of total_time) {
    if (time === 0) continue;
    console.log(time);
  }
}

solution(building, building_info);
