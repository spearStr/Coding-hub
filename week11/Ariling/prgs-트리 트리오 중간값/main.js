function solution(n, edges) {
  // 아니 미친 25만개인데 그럼 미리 구하라는 건데 이게... BFS로 할 수가 있나..?
  // 얘네 경로 가짓수들을 다 알아야 하는데...
  const graph = Array(n + 1)
    .fill()
    .map(() => []);
  for (const [st, ed] of edges) {
    graph[st].push(ed);
    graph[ed].push(st);
  }
  const getMaxInfo = (node) => {
    const visited = Array(n + 1).fill(false);
    const q = [[node, 0]];
    const ret = {
      maxLen: 0,
      arr: [],
    };
    while (q.length) {
      const [node, cnt] = q.pop();
      visited[node] = true;
      if (cnt > ret.maxLen) {
        ret.maxLen = cnt;
        ret.arr = [node];
      } else if (cnt === ret.maxLen) {
        ret.arr.push(node);
      }
      for (const next of graph[node]) {
        if (visited[next]) continue;
        q.push([next, cnt + 1]);
      }
    }
    return ret;
  };
  // 1번으로 해서 구하는게 가장 편할 것
  const { arr } = getMaxInfo(1);
  // 가장 먼 노드에서 최장거리 구하기 (중복될 수 있음)
  const ret = getMaxInfo(arr[0]);
  // 중복된다면 maxLen을 반환하고 그러지 않다면 -1을 해야한다.
  if (arr.length > 1 || ret.arr.length > 1) return ret.maxLen;
  else return ret.maxLen - 1;
}
solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
