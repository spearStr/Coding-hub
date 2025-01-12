const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input, total) {
  let pre_cheese = total;
  let day = 0;
  while (total > 0) {
    day++;
    pre_cheese = total;
    let check = Array(arrInfo[0])
      .fill()
      .map(() => Array(arrInfo[1]).fill(false));
    bfs(0, 0, check);
    bfs(0, input[0].length - 1, check);
    bfs(input.length - 1, 0, check);
    bfs(input.length - 1, input[0].length - 1, check);
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === 1 && check[i][j] == true) {
          input[i][j] = 0;
          total--;
        }
      }
    }
  }
  console.log(day);
  console.log(pre_cheese);
  return;
}

function bfs(x, y, check) {
  let bfs_arr = [[x, y]];
  check[x][y] = true;
  var dr = [-1, 1, 0, 0];
  var dc = [0, 0, -1, 1];
  while (bfs_arr.length > 0) {
    [r, c] = bfs_arr.shift();
    for (let i = 0; i < 4; i++) {
      newR = r + dr[i];
      newC = c + dc[i];
      if (
        0 <= newR &&
        newR < arrInfo[0] &&
        0 <= newC &&
        newC < arrInfo[1] &&
        check[newR][newC] == false
      ) {
        if (arr[newR][newC] == 0) {
          bfs_arr.push([newR, newC]);
        }
        check[newR][newC] = true;
      }
    }
  }
}

let arrInfo = [];
let arr = [];

rl.on("line", (line) => {
  if (arrInfo.length == 0) {
    arrInfo = line.split(" ").map(Number);
  } else {
    arr.push(line.split(" ").map(Number));
    if (arr.length === arrInfo[0]) {
      rl.close();
    }
  }
}).on("close", () => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) count++;
    }
  }
  solution(arr, count);
  process.exit();
});
