function solution(input) {
  let check = [...Array(matrixInfo[0])].map(() =>
    Array(matrixInfo[1]).fill(false)
  );
  let count = 0;
  let max_width = 0;
  function bfs(i, j) {
    check[i][j] = true;
    let q = [[i, j]];
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];
    let num = 0;
    while (q.length > 0) {
      [r, c] = q.shift();
      num++;
      for (let x = 0; x < 4; x++) {
        let newR = r + dr[x];
        let newC = c + dc[x];
        if (
          newR >= 0 &&
          newR < matrixInfo[0] &&
          newC >= 0 &&
          newC < matrixInfo[1] &&
          !check[newR][newC] &&
          input[newR][newC] === 1
        ) {
          check[newR][newC] = true;
          q.push([newR, newC]);
        }
      }
    }
    return num;
  }
  for (let n = 0; n < matrixInfo[0]; n++) {
    for (let m = 0; m < matrixInfo[1]; m++) {
      if (!check[n][m] && arr[n][m] === 1) {
        width = bfs(n, m);
        if (width > max_width) {
          max_width = width;
        }
        count++;
      }
    }
  }
  console.log(count);
  console.log(max_width);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let matrixInfo = [];
let arr = [];

rl.on("line", (line) => {
  if (matrixInfo.length === 0) {
    matrixInfo = line.split(" ").map(Number);
  } else {
    arr.push(line.split(" ").map(Number));
    if (arr.length === matrixInfo[0]) {
      rl.close();
    }
  }
}).on("close", () => {
  solution(arr);
  process.exit();
});
