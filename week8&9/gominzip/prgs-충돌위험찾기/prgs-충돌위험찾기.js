function solution(points, routes) {
  let answer = 0;
  const map = Array.from({length: 101}, () => Array.from({length: 101}, () => new Map()));

  for (const route of routes) {
    answer += move(route, points, map);
  }

  return answer;
}

function move(route, points, map) {
  let time = 0;
  let crash = 0;

  for (let i = 0; i < route.length - 1; i++) {
    let [sr, sc] = points[route[i] - 1];
    let [nr, nc] = points[route[i + 1] - 1];

    // 첫 시작 위치만 초기화
    if (i === 0) crash += updateMap(map, sr, sc, time);

    // 세로 이동
    while (sr !== nr) {
      sr += sr < nr ? 1 : -1;
      time++;
      crash += updateMap(map, sr, sc, time);
    }

    // 가로 이동
    while (sc !== nc) {
      sc += sc < nc ? 1 : -1;
      time++;
      crash += updateMap(map, sr, sc, time);
    }
  }

  return crash;
}

function updateMap(map, r, c, time) {
  map[r][c].set(time, (map[r][c].get(time) || 0) + 1);
  return map[r][c].get(time) === 2 ? 1 : 0;
}
