// 근데 이거... 터지지 않나? 그냥 매 번 구해버리면?
const fs = require("fs");
const [...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 세그먼트 트리라는 건 힌트를 봤다.. 할 줄 모를 듯
class SegmentTree {
  constructor(arr) {
    this.arr = arr;
    this.tree = new Array(arr.length * 4).fill(1);
    this.init(0, arr.length - 1, 1);
  }
  getSign(num) {
    return num === 0 ? 0 : num > 0 ? 1 : -1;
  }
  init(start, end, node) {
    if (start === end) return (this.tree[node] = this.getSign(this.arr[start]));
    const mid = Math.floor((start + end) / 2);
    return (this.tree[node] =
      this.init(start, mid, node * 2) * this.init(mid + 1, end, node * 2 + 1));
  }

  update(start, end, node, idx, val) {
    if (idx < start || end < idx) return this.tree[node];
    if (start === end) return (this.tree[node] = this.getSign(val));
    const mid = Math.floor((start + end) / 2);
    return (this.tree[node] =
      this.update(start, mid, node * 2, idx, val) *
      this.update(mid + 1, end, node * 2 + 1, idx, val));
  }

  query(start, end, node, left, right) {
    if (right < start || end < left) return 1;
    if (left <= start && end <= right) return this.tree[node];
    const mid = Math.floor((start + end) / 2);
    return (
      this.query(start, mid, node * 2, left, right) *
      this.query(mid + 1, end, node * 2 + 1, left, right)
    );
  }

  updateValue(idx, val) {
    this.arr[idx] = val;
    this.update(0, this.arr.length - 1, 1, idx, val);
  }

  getProduct(left, right) {
    return this.query(0, this.arr.length - 1, 1, left, right);
  }
}
function solution() {
  let index = 0;
  while (index < input.length - 1) {
    let result = "";
    const [number_cnt, command_cnt] = input[index].split(" ").map(Number);
    index++;
    // 숫자들어있는 곳
    const arr = input[index].split(" ").map(Number);
    const segTree = new SegmentTree(arr);
    index++;
    for (let i = index; i < index + command_cnt; i++) {
      const [command_type, first, last] = input[i].split(" ");
      if (command_type === "C") {
        const [idx, change_num] = [parseInt(first), parseInt(last)];
        segTree.updateValue(idx - 1, change_num);
      } else {
        const [st, ed] = [parseInt(first), parseInt(last)];
        // 근데 이러면 무조건 터질 것 같아서 힌트를 봤더니 세그먼트 트리를 하라는 말도 안되는...
        // let sum = arr.slice(st - 1, ed).reduce((a, b) => a * b, 1);
        const product = segTree.getProduct(st - 1, ed - 1);
        result += product === 0 ? "0" : product < 0 ? "-" : "+";
      }
    }
    index = index + command_cnt;
    console.log(result);
  }
}
solution();
