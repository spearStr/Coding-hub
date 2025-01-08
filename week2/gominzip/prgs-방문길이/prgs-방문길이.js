function solution(dirs) {
  var answer = 0;

  const N = 10;
  const grid = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => ({
      U: false,
      D: false,
      R: false,
      L: false,
    }))
  );

  const direction = { U: [-1, 0], D: [1, 0], R: [0, 1], L: [0, -1] };
  const opposite = { U: "D", D: "U", R: "L", L: "R" };

  let x = 5,
    y = 5;

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const [dy, dx] = direction[dirs[i]];
    const [ny, nx] = [y + dy, x + dx];
    // 경계를 넘어간 경우
    if (0 > ny || ny > N || 0 > nx || nx > N) continue;
    // 처음 지나가는 길인 경우
    // 두 노드의 양방향 모두 지나간 것으로 체크
    if (!grid[y][x][dir]) {
      grid[y][x][dir] = true;
      grid[ny][nx][opposite[dir]] = true;
      answer++;
    }

    x = nx;
    y = ny;
  }

  return answer;
}
