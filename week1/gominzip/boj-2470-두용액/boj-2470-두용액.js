const fs = require("fs");
let [N, inputs] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

N = Number(N);
inputs = inputs.split(" ").map(Number);

function solution(N, inputs) {
  let minResult = 2000000000;
  inputs = inputs.sort((a, b) => a - b);

  let start = 0;
  let end = N;

  let answer = [inputs[start], inputs[end]];

  while (start < end) {
    const [svalue, evalue] = [inputs[start], inputs[end]];

    let result = svalue + evalue;
    let absResult = Math.abs(result);

    if (absResult <= minResult) {
      minResult = absResult;
      answer = [svalue, evalue];
    }

    if (result === 0) break;

    if (result < 0) {
      start++;
    } else {
      end--;
    }
  }

  return answer.join(" ");
}

console.log(solution(N, inputs));
