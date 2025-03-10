const fs = require("fs");
const [firstLine, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
// 이거 또... 트리일 것 같은데... 맞네~  세그먼트 트리 이런...
// 덧셈과 곱셈의 다른점 1이냐 아니냐의 차이가 존재한다!
class SegmentTree {
  constructor(arr) {
    this.arr = arr;
    this.tree = new Array(arr.length * 4).fill(0);
    this.init(0, arr.length - 1, 1);
  }

  init(start, end, node) {
    if (start === end) return (this.tree[node] = this.arr[start]);
    const mid = Math.floor((start + end) / 2);
    return (this.tree[node] =
      this.init(start, mid, node * 2) + this.init(mid + 1, end, node * 2 + 1));
  }

  update(start, end, node, idx, val) {
    if (idx < start || end < idx) return this.tree[node];
    if (start === end) return (this.tree[node] = val);
    const mid = Math.floor((start + end) / 2);
    return (this.tree[node] =
      this.update(start, mid, node * 2, idx, val) +
      this.update(mid + 1, end, node * 2 + 1, idx, val));
  }

  query(start, end, node, left, right) {
    if (right < start || end < left) return 0;
    if (left <= start && end <= right) return this.tree[node];
    const mid = Math.floor((start + end) / 2);
    return (
      this.query(start, mid, node * 2, left, right) +
      this.query(mid + 1, end, node * 2 + 1, left, right)
    );
  }

  updateValue(idx, val) {
    this.arr[idx] = val;
    this.update(0, this.arr.length - 1, 1, idx, val);
  }

  getSum(left, right) {
    return this.query(0, this.arr.length - 1, 1, left, right);
  }
}
const [N, Q] = firstLine.split(" ").map(Number);
const arr = input[0].split(" ").map(Number);
const segTree = new SegmentTree(arr);
for (let i = 1; i <= Q; i++) {
  const [x, y, a, b] = input[i].split(" ").map(Number);
  let result = 0;
  if (x > y) {
    result = segTree.getSum(y - 1, x - 1);
  } else {
    result = segTree.getSum(x - 1, y - 1);
  }
  console.log(result);
  segTree.updateValue(a - 1, b);
}
