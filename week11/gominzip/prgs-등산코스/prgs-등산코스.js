function solution(n, paths, gates, summits) {
  const edges = Array.from({length: n + 1}, () => []);
  const gateSet = new Set(gates);
  const summitSet = new Set(summits);

  for (const [i, j, w] of paths) {
    if (!gateSet.has(j)) edges[i].push([j, w]);
    if (!gateSet.has(i)) edges[j].push([i, w]);
  }

  const intensity = Array(n + 1).fill(Infinity);
  const queue = [];

  for (const gate of gates) {
    intensity[gate] = 0;
    queue.push([0, gate]); // [현재까지의 intensity, 노드]
  }

  while (queue.length) {
    const [curIntensity, node] = queue.shift();

    // 봉우리 도착
    if (summitSet.has(node)) continue;

    for (const [next, weight] of edges[node]) {
      // 현재 경로에서의 최대 가중치
      const newIntensity = Math.max(curIntensity, weight);
      if (newIntensity < intensity[next]) {
        intensity[next] = newIntensity;
        queue.push([newIntensity, next]);
      }
    }
  }

  // 가장 작은 intensity를 가진 봉우리 찾기
  let bestSummit = -1;
  let minIntensity = Infinity;

  for (const summit of summits) {
    if (intensity[summit] < minIntensity) {
      minIntensity = intensity[summit];
      bestSummit = summit;
    } else if (intensity[summit] === minIntensity) {
      bestSummit = Math.min(bestSummit, summit); // 번호가 작은 봉우리 선택
    }
  }

  return [bestSummit, minIntensity];
}
