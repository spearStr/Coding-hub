const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const convert = (value) => (value > 0 ? 1 : value < 0 ? -1 : 0);

// 세그먼트 트리 클래스 정의
class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(1);
    this.build(arr, 1, 0, this.n - 1);
  }

  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = convert(arr[start]);
      return this.tree[node];
    }
    let mid = Math.floor((start + end) / 2);
    this.tree[node] = convert(this.build(arr, node * 2, start, mid) * this.build(arr, node * 2 + 1, mid + 1, end));
    return this.tree[node];
  }

  update(index, value, node = 1, start = 0, end = this.n - 1) {
    if (index < start || index > end) return this.tree[node];
    if (start === end) {
      this.tree[node] = convert(value);
      return this.tree[node];
    }
    let mid = Math.floor((start + end) / 2);
    this.tree[node] = convert(
      this.update(index, value, node * 2, start, mid) * this.update(index, value, node * 2 + 1, mid + 1, end)
    );
    return this.tree[node];
  }

  query(left, right, node = 1, start = 0, end = this.n - 1) {
    if (right < start || left > end) return 1;
    if (left <= start && end <= right) return this.tree[node];
    let mid = Math.floor((start + end) / 2);
    return convert(this.query(left, right, node * 2, start, mid) * this.query(left, right, node * 2 + 1, mid + 1, end));
  }
}

let index = 0;
let output = [];
while (index < input.length) {
  const [N, K] = input[index].split(" ").map(Number);
  index++;

  const numbers = input[index].split(" ").map(Number);
  index++;

  const segTree = new SegmentTree(numbers);

  for (let i = 0; i < K; i++) {
    const [cmd, a, b] = input[index].split(" ");
    const numA = Number(a);
    const numB = Number(b);
    index++;

    if (cmd === "C") segTree.update(numA - 1, numB);
    else if (cmd === "P") {
      const result = segTree.query(numA - 1, numB - 1);
      output.push(result > 0 ? "+" : result === 0 ? "0" : "-");
    }
  }
  output.push("\n");
}
console.log(output.join(""));
