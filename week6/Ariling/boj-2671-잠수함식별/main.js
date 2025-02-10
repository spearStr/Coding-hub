const fs = require("fs");
const [line] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 우리가 하려는 건 100~1~ 과 01을 임의로 섞을 수 있어서 나타낼 수 있는 것
// 아아 이러면 100에서 0이 무수히 있거나 1이 무수히 있어도 되고
function solution() {
  const pattern = /^(100+1+|01)+$/;
  return pattern.test(line) ? console.log("SUBMARINE") : console.log("NOISE");
}
solution();
