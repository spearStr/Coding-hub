function solution(n, s, a, b, fares) {
  // 출발 시점이 s, a와 b는 그 도착지점 같은거 n의 지점갯수
  // fares는 양방향으로 나타나있고.. st, ed, fare순이라고 생각하자
  // 아 이게 같이 타고 내릴 때 효과적인 방법이 있구나...
  // 다익스트라로 찍고 각각 하면 되지 않을까? -> 는 파이썬일때 의미가 있구요... 이거 힙 못 만들면 그냥 플로이드가 낫겠네..
  var answer = Infinity;
  const dist = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(Infinity));
  for (let i = 1; i <= n; i++) {
    dist[i][i] = 0;
  }
  // 플로이드는 행렬로 할 것
  for (const [st, ed, fare] of fares) {
    dist[st][ed] = fare;
    dist[ed][st] = fare;
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    // 각 지점 도착점 + 공통으로 타는 곳
    let total_fare = dist[s][i] + dist[i][a] + dist[i][b];
    answer = Math.min(answer, total_fare);
  }
  // let graph = Array(n + 1)
  //   .fill()
  //   .map(() => []);
  // for (const [st, ed, fare] of fares) {
  //   graph[st].push([fare, ed]);
  //   graph[ed].push([fare, st]);
  // }
  // function dikstra(s) {
  //   let distances = Array(n + 1).fill(Infinity);
  //   let q = [[0, s]]; // 비용과 출발점
  //   distances[s] = 0;
  //   while (q.length > 0) {
  //     const [cur_fare, cur_pos] = q.shift();
  //     if (distances[cur_pos] > cur_fare) continue;
  //     for (let i = 0; i < graph[cur_pos].length; i++) {
  //       const [next_fare, next_pos] = graph[cur_pos][i];
  //       let temp_fare = next_fare + cur_fare;
  //       if (distances[next_pos] > temp_fare) {
  //         distances[next_pos] = temp_fare;
  //         q.push([temp_fare, next_pos]);
  //         q = q.sort((a, b) => a[0] - b[0]);
  //       }
  //     }
  //   }
  //   return distances;
  // }
  // const node_distance = [[]];
  // for (let i = 1; i <= n; i++) {
  //   const node_result = dikstra(i);
  //   node_distance.push(node_result);
  // }
  // for (let i = 1; i <= n; i++) {
  //   // 각 지점 도착점 + 공통으로 타는 곳
  //   let total_fare =
  //     node_distance[s][i] + node_distance[i][a] + node_distance[i][b];
  //   if (total_fare < answer) answer = total_fare;
  // }
  return answer;
}
solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
