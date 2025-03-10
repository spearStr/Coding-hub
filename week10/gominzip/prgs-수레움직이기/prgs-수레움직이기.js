function solution(maze) {
  var answer = Infinity;
  const [n, m] = [maze.length, maze[0].length];

  const visited = Array.from({length: n}, () => Array.from({length: m}, () => ({red: false, blue: false})));

  let startRed = null;
  let startBlue = null;
  let endRed = null;
  let endBlue = null;

  // 좌표 타입별 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let type = maze[i][j];
      switch (type) {
        case 1:
          startRed = {x: i, y: j};
          visited[i][j] = {red: true, blue: false};
          break;
        case 2:
          startBlue = {x: i, y: j};
          visited[i][j] = {red: false, blue: true};
          break;
        case 3:
          endRed = {x: i, y: j};
          break;
        case 4:
          endBlue = {x: i, y: j};
          break;
        case 5:
          visited[i][j] = {red: true, blue: true};
          break;
        default:
          break;
      }
    }
  }

  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function dfs(currRed, currBlue, count) {
    const redArrived = currRed.x === endRed.x && currRed.y === endRed.y;
    const blueArrived = currBlue.x === endBlue.x && currBlue.y === endBlue.y;

    if (count >= answer) return;

    if (redArrived && blueArrived) {
      answer = Math.min(answer, count);
      return;
    }

    for (let [rdx, rdy] of dir) {
      for (let [bdx, bdy] of dir) {
        let [rx, ry] = [currRed.x + rdx, currRed.y + rdy];
        let [bx, by] = [currBlue.x + bdx, currBlue.y + bdy];

        if (redArrived) {
          [rx, ry] = [currRed.x, currRed.y];
          visited[rx][ry].red = false;
        }
        if (blueArrived) {
          [bx, by] = [currBlue.x, currBlue.y];
          visited[bx][by].blue = false;
        }

        if (rx < 0 || rx >= n || ry < 0 || ry >= m || visited[rx][ry].red) continue;
        if (bx < 0 || bx >= n || by < 0 || by >= m || visited[bx][by].blue) continue;

        // 두 수레가 겹치지 않도록 체크
        if (
          (rx === currBlue.x && ry === currBlue.y && bx === currRed.x && by === currRed.y) ||
          (rx === bx && ry === by)
        )
          continue;

        visited[rx][ry].red = true;
        visited[bx][by].blue = true;
        dfs({x: rx, y: ry}, {x: bx, y: by}, count + 1);
        visited[rx][ry].red = false;
        visited[bx][by].blue = false;
      }
    }
  }

  dfs(startRed, startBlue, 0);

  return answer === Infinity ? 0 : answer;
}
