function solution(input) {
  var first_arr = [0];
  var second_arr = [1];
  var third_arr = [2];
  var fourth_arr = [3];
  total_move(first_arr, 1);
  total_move(second_arr, 1);
  total_move(third_arr, 1);
  total_move(fourth_arr, 1);
  var arr = Array(101)
    .fill()
    .map(() => Array(101).fill(0));
  function move(x, y, dir, gen) {
    var newX = x;
    var newY = y;
    for (let i = 0; i < 2 ** gen; i++) {
      var move_dir = 0;
      if (dir === 0) {
        move_dir = first_arr[i];
      } else if (dir === 1) {
        move_dir = second_arr[i];
      } else if (dir === 2) {
        move_dir = third_arr[i];
      } else if (dir === 3) {
        move_dir = fourth_arr[i];
      }
      if (move_dir === 0 && newX + 1 <= 100) {
        newX++;
      } else if (move_dir === 1 && newY - 1 >= 0) {
        newY--;
      } else if (move_dir === 2 && newX - 1 >= 0) {
        newX--;
      } else if (move_dir === 3 && newY + 1 <= 100) {
        newY++;
      }
      arr[newX][newY] = 1;
    }
  }
  for (let i = 0; i < input.length; i++) {
    [st, ed, dir, gen] = input[i];
    arr[st][ed] = 1;
    move(st, ed, dir, gen);
  }
  var count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (
        arr[i][j] == 1 &&
        arr[i + 1][j] == 1 &&
        arr[i][j + 1] == 1 &&
        arr[i + 1][j + 1] == 1
      ) {
        count++;
      }
    }
  }
  console.log(count);
}

function total_move(arr, generation) {
  if (generation === 11) return;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 3) {
      arr.push(0);
    } else arr.push(arr[i] + 1);
  }
  total_move(arr, generation + 1);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let N;
let input_arr = [];
rl.on("line", (line) => {
  if (!N) {
    N = parseInt(line);
  } else {
    input_arr.push(line.split(" ").map(Number));
    if (input_arr.length === N) {
      rl.close();
    }
  }
}).on("close", () => {
  solution(input_arr);
  process.exit();
});
