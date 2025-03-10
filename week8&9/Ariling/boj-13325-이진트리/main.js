const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const k = Number(firstLine);
const tree_info = input[0].split(" ").map(Number);
tree_info.unshift(0);
const sum_arr = Array(tree_info.length).fill(0);
const depth = 2 ** (k + 1) - 2;
let key = Math.floor(depth / 2);
while (key >= 1) {
  for (let i = key; i < 2 * key + 1; i++) {
    if (i % 2 == 0) continue;
    let temp1 = tree_info[i] + sum_arr[i];
    let temp2 = tree_info[i + 1] + sum_arr[i + 1];
    const gap = Math.abs(temp1 - temp2);
    const maxVal = Math.max(temp1, temp2);
    sum_arr[Math.floor(i / 2)] = maxVal;
    if (temp1 > temp2) {
      tree_info[i + 1] += gap;
    } else if (temp2 < temp1) {
      tree_info[i] += gap;
    }
  }
  key = Math.floor(key / 2);
}
console.log(tree_info.reduce((a, b) => a + b, 0));
