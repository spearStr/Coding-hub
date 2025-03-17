function solution(n, build_frame) {
  let answer = [];
  const graph = Array.from({length: n + 1}, () => Array.from({length: n + 1}, () => ({column: false, beam: false})));

  for (let [x, y, type, action] of build_frame) {
    if (action === 1) {
      // 설치
      if (canAdd(x, y, type, n, graph)) {
        if (type === 0) graph[y][x].column = true;
        else graph[y][x].beam = true;
        answer.push([x, y, type]);
      }
    } else {
      // 삭제
      if (canRemove(x, y, type, n, graph)) {
        if (type === 0) graph[y][x].column = false;
        else graph[y][x].beam = false;
        answer = answer.filter(([bx, by, btype]) => !(bx === x && by === y && btype === type));
      }
    }
  }

  return answer.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
}

function canAdd(x, y, type, n, graph) {
  if (type === 0) {
    // 기둥 설치
    return (
      y === 0 || // 바닥 위
      graph[y - 1]?.[x]?.column || // 아래에 기둥이 있을 때
      graph[y]?.[x]?.beam || // 현재 위치에 보가 있을 때
      (x > 0 && graph[y]?.[x - 1]?.beam) // 왼쪽 보 위
    );
  } else {
    // 보 설치
    return (
      graph[y - 1]?.[x]?.column || // 왼쪽 끝이 기둥 위
      graph[y - 1]?.[x + 1]?.column || // 오른쪽 끝이 기둥 위
      (x > 0 && graph[y]?.[x - 1]?.beam && graph[y]?.[x + 1]?.beam) // 양쪽 끝이 다른 보와 연결
    );
  }
}

function canRemove(x, y, type, n, graph) {
  if (type === 0) graph[y][x].column = false;
  else graph[y][x].beam = false;

  const stable = isStable(n, graph);

  if (type === 0) graph[y][x].column = true;
  else graph[y][x].beam = true;

  return stable;
}

function isStable(n, graph) {
  for (let y = 0; y <= n; y++) {
    for (let x = 0; x <= n; x++) {
      if (graph[y][x].column && !canAdd(x, y, 0, n, graph)) return false;
      if (graph[y][x].beam && !canAdd(x, y, 1, n, graph)) return false;
    }
  }
  return true;
}
