const fs = require("fs");
const [...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map((line) => line.split("").map(Number));

function solution(arr) {
  const blank = [];
  // 각 행 숫자 확인
  function row(x, n) {
    for (let i = 0; i < 9; i++) {
      if (n === arr[x][i]) {
        return false;
      }
    }
    return true;
  }
  // 각 열 숫자 확인
  function column(y, n) {
    for (let i = 0; i < 9; i++) {
      if (n === arr[i][y]) {
        return false;
      }
    }
    return true;
  }
  // 3 * 3 정사각형 숫자 확인
  function square(x, y, n) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (n === arr[Math.floor(x / 3) * 3 + i][Math.floor(y / 3) * 3 + j]) {
          return false;
        }
      }
    }
    return true;
  }
  // 빈 칸 찾는 함수 -> 여러개이므로 일단은 돌려보자..
  function find(n) {
    if (n === blank.length) {
      const answer = arr.map((line) => line.join("")).join("\n");
      console.log(answer);
      //이래야 한다고 한다...
      process.exit();
    }
    const r = blank[n][0];
    const c = blank[n][1];
    for (let i = 1; i < 10; i++) {
      if (column(c, i) && row(r, i) && square(r, c, i)) {
        arr[r][c] = i;
        find(n + 1);
        arr[r][c] = 0;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        blank.push([i, j]);
      }
    }
  }
  find(0);
}

solution(arr);
