// 문제 풀이 함수
function solution(input) {
  input.sort(
    (a, b) =>
      Number(b[1]) - Number(a[1]) ||
      Number(a[2]) - Number(b[2]) ||
      Number(b[3]) - Number(a[3]) ||
      (a[0] > b[0] ? 1 : -1)
  );
  for (let x = 0; x < input.length; x++) {
    console.log(input[x][0]);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
const arr = [];

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    arr.push(line.split(" "));
    if (arr.length === n) {
      rl.close();
    }
  }
}).on("close", () => {
  solution(arr);
  process.exit();
});
