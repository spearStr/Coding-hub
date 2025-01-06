const fs = require("fs");
const [N, ...infos] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(N, infos) {
  let parsedInfos = infos.map((score) => {
    return score.split(" ").map((value, index) => {
      if (index !== 0) return Number(value);
      return value;
    });
  });

  let answer = parsedInfos.sort(sortStudents).map((value) => value[0]);
  return answer.join("\n");
}

function sortStudents(a, b) {
  if (a[1] - b[1] !== 0) return b[1] - a[1];
  if (a[2] - b[2] !== 0) return a[2] - b[2];
  if (a[3] - b[3] !== 0) return b[3] - a[3];
  return a[0] > b[0] ? 1 : -1;
}

console.log(solution(N, infos));
