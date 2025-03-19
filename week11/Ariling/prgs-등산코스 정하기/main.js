function solution(n, paths, gates, summits) {
  // 이거 그냥 모든 경로를 구하고 그 중에서도 작은걸 구해야 할 것 같은데...
  // 산봉우리를 하나만 해야하고 그리고 다시 돌아올 땐 내쪽으로 돌아와야 해
  // 시간 초과 및 런타임 에러 -> DFS로 시도를 했었다. -> 는 BFS였다!
  let minP = 50001;
  let minV = 10000001;
  const info = {};
  for (const summit of summits) {
    info[summit] = 1;
  }
  for (const gate of gates) {
    info[gate] = 2;
  }
  const graph = Array(n + 1)
    .fill()
    .map(() => []);
  for (const [st, ed, dis] of paths) {
    graph[st].push([ed, dis]);
    graph[ed].push([st, dis]);
  }
  let visited = Array(n + 1)
    .fill()
    .map(() => 0);
  function bfs(gate) {
    const qp = [[gate, 0]];
    while (qp.length) {
      const [from, time] = qp.shift();
      if (minV < time) {
        continue;
      }
      for (const [to, weight] of graph[from]) {
        const vp = visited[to];
        const maxIntensity = Math.max(time, weight);
        // 정상일 때
        if (info[to] === 1) {
          if (minV > maxIntensity) {
            minP = to;
            minV = maxIntensity;
          } else if (minV === maxIntensity && minP > to) {
            minP = to;
            minV = maxIntensity;
          }
        }
        // 게이트일 때
        else if (info[to] === 2) {
          continue;
        } else {
          if (vp === 0) {
            visited[to] = maxIntensity;
            qp.push([to, maxIntensity]);
          } else if (vp > maxIntensity) {
            visited[to] = maxIntensity;
            qp.push([to, maxIntensity]);
          }
        }
      }
    }
    return;
  }
  for (const gate of gates) {
    bfs(gate);
  }
  const answer = [minP, minV];
  // function find_search(
  //   from,
  //   to,
  //   up_arr,
  //   down_arr,
  //   intensity,
  //   first_visited,
  //   up_visited,
  //   up_visited_number
  // ) {
  //   if (up_visited && from === to) {
  //     if (intensity === answer[1] && up_visited_number < answer[0]) {
  //       answer = [up_visited_number, intensity];
  //     }
  //     if (intensity < answer[1]) {
  //       answer = [up_visited_number, intensity];
  //     }
  //     return;
  //   }
  //   // 다른 산봉우리를 갔을 땐 경우에서 제외
  //   if (up_visited && from !== up_visited_number && summits.includes(from)) {
  //     return;
  //   }
  //   // intensity가 높으면 제외하기
  //   if (intensity > answer[1]) {
  //     return;
  //   }
  //   if (from === to && !up_visited) {
  //     up_visited = true;
  //     up_visited_number = to;
  //     to = first_visited;
  //   }
  //   if (up_visited) {
  //     for (const [next, dis] of graph[from]) {
  //       if (!down_arr[next]) {
  //         const newIntensity = Math.max(intensity, dis);
  //         down_arr[next] = true;
  //         find_search(
  //           next,
  //           to,
  //           up_arr,
  //           down_arr,
  //           newIntensity,
  //           first_visited,
  //           up_visited,
  //           up_visited_number
  //         );
  //         down_arr[next] = false;
  //       }
  //     }
  //   } else {
  //     for (const [next, dis] of graph[from]) {
  //       if (!up_arr[next]) {
  //         const newIntensity = Math.max(intensity, dis);
  //         up_arr[next] = true;
  //         find_search(
  //           next,
  //           to,
  //           up_arr,
  //           down_arr,
  //           newIntensity,
  //           first_visited,
  //           up_visited,
  //           up_visited_number
  //         );
  //         up_arr[next] = false;
  //       }
  //     }
  //   }
  //   return;
  // }
  return answer;
}
solution(
  7,
  [
    [1, 2, 5],
    [1, 4, 1],
    [2, 3, 1],
    [2, 6, 7],
    [4, 5, 1],
    [5, 6, 1],
    [6, 7, 1],
  ],
  [3, 7],
  [1, 5]
);
