function solution(arr) {
  var check = Array(N)
    .fill()
    .map(() => Array(N).fill(false));
  var dr = [-1, 1, 0, 0];
  var dc = [0, 0, -1, 1];
  var land_num = 1;
  function land_check(r, c, num) {
    var land_pos = [];
    land_pos.push([r, c]);
    arr[r][c] = num;
    check[r][c] = true;
    while (land_pos.length > 0) {
      var position = land_pos.shift();
      for (let i = 0; i < 4; i++) {
        var newR = position[0] + dr[i];
        var newC = position[1] + dc[i];
        if (
          newR >= 0 &&
          newR < N &&
          newC >= 0 &&
          newC < N &&
          check[newR][newC] == false &&
          arr[newR][newC] != 0
        ) {
          arr[newR][newC] = num;
          check[newR][newC] = true;
          land_pos.push([newR, newC]);
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] != 0 && check[i][j] == false) {
        land_check(i, j, land_num);
        land_num += 1;
      }
    }
  }
  var min_dis = Infinity;
  function bfs(r, c) {
    var bfs_pos = [];
    var bfs_check = Array(N)
      .fill()
      .map(() => Array(N).fill(false));
    bfs_pos.push([r, c, 0]);
    bfs_check[r][c] = true;
    while (bfs_pos.length > 0) {
      var position = bfs_pos.shift();
      if (position[2] >= min_dis) {
        continue;
      }
      for (let i = 0; i < 4; i++) {
        var newR = position[0] + dr[i];
        var newC = position[1] + dc[i];
        if (
          newR >= 0 &&
          newR < N &&
          newC >= 0 &&
          newC < N &&
          bfs_check[newR][newC] == false &&
          arr[newR][newC] != arr[r][c]
        ) {
          if (arr[newR][newC] == 0) {
            bfs_pos.push([newR, newC, position[2] + 1]);
            bfs_check[newR][newC] = true;
          } else {
            bfs_check[newR][newC] = true;
            min_dis = Math.min(min_dis, position[2]);
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] != 0) {
        bfs(i, j);
      }
    }
  }
  console.log(min_dis);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let arr = [];

rl.on("line", (line) => {
  if (!N) {
    N = parseInt(line);
  } else {
    arr.push(line.split(" ").map(Number));
    if (arr.length === N) {
      rl.close();
    }
  }
}).on("close", () => {
  solution(arr);
  process.exit();
});
