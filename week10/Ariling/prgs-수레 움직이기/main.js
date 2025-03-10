function solution(maze) {
  // 빨간 수레와 파란 수레가 존재
  // 방문했던 칸으로 이동 불가, 도착 칸에 도착하면 움직이지 않는다.
  // 두 수레를 같은 칸으로 움직이기 불가능, 수레끼리 자리를 바꾸며 움직이기 불까능
  // 최소 턴을 구하기.. 이게 얘네가 되는지 재귀일 것 같은데.. 백트래킹해서 하는 것 같은데
  // maze길이 0 빈칸 1 시작 2 파란 시작 3 빨 도 4 파 도 5 벽
  var answer = 9999;
  // 문제는 백트래킹이 맞고.. set으로 경로 저장하면서 하면 될텐데..
  // 아아 maze는 각 칸들의 정보인가보다.. 그러면 1->3의 경로, 2->4의 경로를 구하는 것
  // 테케 13,14만 틀림
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const r = maze.length;
  const c = maze[0].length;
  let r_pos = null;
  let b_pos = null;
  let r_arrive = null;
  let b_arrive = null;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (maze[i][j] === 1) {
        r_pos = [i, j];
      } else if (maze[i][j] == 2) {
        b_pos = [i, j];
      } else if (maze[i][j] == 3) {
        r_arrive = [i, j];
      } else if (maze[i][j] == 4) {
        b_arrive = [i, j];
      }
    }
  }
  // 아 red이동,blue이동 다 따로 해야한다.. 이런 쉬엣..
  function turn_track(turn, red_track, blue_track, red_pos, blue_pos) {
    if (turn > answer) return;
    if (
      red_pos[0] === r_arrive[0] &&
      red_pos[1] === r_arrive[1] &&
      blue_pos[0] === b_arrive[0] &&
      blue_pos[1] === b_arrive[1]
    ) {
      answer = turn;
      return;
    }
    // 가능한 조합을 다 하라는건데... 이게 가능한가..? 해야지 뭐.. 근데 또 가만히 있어야 하잖아 도착하면
    for (let i = 0; i < 4; i++) {
      const new_red_pos =
        red_pos[0] === r_arrive[0] && red_pos[1] === r_arrive[1]
          ? [red_pos[0], red_pos[1]]
          : [red_pos[0] + directions[i][0], red_pos[1] + directions[i][1]];
      for (let j = 0; j < 4; j++) {
        const new_blue_pos =
          blue_pos[0] === b_arrive[0] && blue_pos[1] === b_arrive[1]
            ? [blue_pos[0], blue_pos[1]]
            : [blue_pos[0] + directions[j][0], blue_pos[1] + directions[j][1]];
        const isRedAtDestination =
          new_red_pos[0] === r_arrive[0] && new_red_pos[1] === r_arrive[1];
        const isBlueAtDestination =
          new_blue_pos[0] === b_arrive[0] && new_blue_pos[1] === b_arrive[1];
        if (
          0 <= new_red_pos[0] &&
          0 <= new_red_pos[1] &&
          new_red_pos[0] < r &&
          new_red_pos[1] < c &&
          0 <= new_blue_pos[0] &&
          0 <= new_blue_pos[1] &&
          new_blue_pos[0] < r &&
          new_blue_pos[1] < c
        ) {
          if (
            new_red_pos[0] === new_blue_pos[0] &&
            new_red_pos[1] === new_blue_pos[1]
          )
            continue;
          if (
            new_red_pos[0] === blue_pos[0] &&
            new_red_pos[1] === blue_pos[1] &&
            new_blue_pos[0] === red_pos[0] &&
            new_blue_pos[1] === red_pos[1]
          )
            continue;
          if (
            maze[new_red_pos[0]][new_red_pos[1]] === 5 ||
            maze[new_blue_pos[0]][new_blue_pos[1]] === 5
          )
            continue;
          if (
            (!isRedAtDestination &&
              red_track.has(`${new_red_pos[0]} ${new_red_pos[1]}`)) ||
            (!isBlueAtDestination &&
              blue_track.has(`${new_blue_pos[0]} ${new_blue_pos[1]}`))
          )
            continue;
          red_track.add(`${new_red_pos[0]} ${new_red_pos[1]}`);
          blue_track.add(`${new_blue_pos[0]} ${new_blue_pos[1]}`);
          turn_track(
            turn + 1,
            red_track,
            blue_track,
            new_red_pos,
            new_blue_pos
          );
          red_track.delete(`${new_red_pos[0]} ${new_red_pos[1]}`);
          blue_track.delete(`${new_blue_pos[0]} ${new_blue_pos[1]}`);
        }
      }
    }
  }
  turn_track(
    0,
    new Set([`${r_pos[0]} ${r_pos[1]}`]),
    new Set([`${b_pos[0]} ${b_pos[1]}`]),
    r_pos,
    b_pos
  );
  return answer === 9999 ? 0 : answer;
}
solution([
  [1, 0, 2],
  [0, 0, 0],
  [5, 0, 5],
  [4, 0, 3],
]);
