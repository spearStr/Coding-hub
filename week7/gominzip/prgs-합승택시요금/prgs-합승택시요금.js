function dijkstra(n, base, fare) {
  const cost = Array(n + 1).fill(Infinity);
  cost[base] = 0;
  const queue = [[base, cost[base]]];

  while (queue.length) {
    const [start, sfare] = queue.shift();
    if (sfare > cost[start]) continue;
    for (const [end, efare] of fare[start]) {
      let newCost = sfare + efare;
      if (newCost < cost[end]) {
        cost[end] = newCost;
        queue.push([end, newCost]);
      }
    }
  }

  return cost;
}

function solution(n, s, a, b, fares) {
  var answer = Infinity;
  const fare = {};

  for (let [c, d, f] of fares) {
    (fare[c] ||= []).push([d, f]);
    (fare[d] ||= []).push([c, f]);
  }

  const fareFromS = dijkstra(n, s, fare);
  const fareFromA = dijkstra(n, a, fare);
  const fareFromB = dijkstra(n, b, fare);

  for (let i = 1; i <= n; i++) {
    const total = fareFromS[i] + fareFromA[i] + fareFromB[i];
    answer = Math.min(answer, total);
  }

  return answer;
}
