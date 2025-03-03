const fs = require("fs");
let [k, tree] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// 루트 노드 추가
tree = [0, ...tree];

function dfs(i) {
  const leftChild = i * 2 + 1,
    rightChild = i * 2 + 2;

  if (leftChild >= tree.length) return 0;

  const leftEdge = tree[leftChild],
    rightEdge = tree[rightChild];
  const leftMax = dfs(leftChild),
    rightMax = dfs(rightChild);
  const leftResult = leftEdge + leftMax,
    rightResult = rightEdge + rightMax;

  if (leftResult > rightResult) tree[rightChild] = leftResult - rightMax;
  else tree[leftChild] = rightResult - leftMax;

  return Math.max(leftResult, rightResult);
}

dfs(0);
console.log(tree.reduce((a, b) => a + b, 0));
