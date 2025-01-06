// 문제 풀이 함수
function solution(input) {
  input.sort((a, b) => a - b);
  (st = 0), (ed = input.length - 1);
  let result = [input[st], input[ed]];
  let diff = Math.abs(result[0] + result[1]);
  while (st < ed) {
    let cur_diff = input[st] + input[ed];
    if (Math.abs(cur_diff) < diff) {
      diff = Math.abs(cur_diff);
      result = [input[st], input[ed]];
      if (diff === 0) {
        break;
      }
    }
    if (cur_diff < 0) {
      st++;
    } else {
      ed--;
    }
  }
  console.log(result[0], result[1]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line);
  } else {
    arr = line.split(" ").map((el) => {
      return Number(el);
    });
    rl.close();
  }
}).on("close", () => {
  solution(arr);
  process.exit();
});
