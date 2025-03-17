function solution(n, build_frame) {
  // 기둥과 보를 이용하여 구조물을 자동으로 세우는 로봇 개발
  // 기둥은 바닥위에 있거나 보의 한쪽 끝 부분 위에 있거나 다른 기둥 위
  // 보는 한쪽 끝 기둥 위에 있거나 양쪽 끝 부분이 다른 보와 동시에 연결
  // n * n 배열,
  // 구조물의 상태 return
  // build_frame [x, y, a, b]
  // x, y 설치 또는 삭제할 좌표값
  // a -> 0은 기둥 1은 보
  // b -> 0 삭제, 1은 설치
  // 바닥에 보를 설치하는 경우가 없다.
  // 보는 오른쪽으로 기둥은 위쪽으로
  // x표를 기준으로 오름차순 정렬, y좌표 기준으로 오름차순 정렬
  // x와 y가 모두 같으면 기둥을 앞서게 기둥이 0이니깐..
  var answer = [];
  const structures = new Set();
  function canBuild(x, y, a) {
    if (a === 0) {
      if (y === 0) return true;
      // 보의 한쪽 끝 위에 있거나
      if (structures.has(`${x - 1},${y},1`) || structures.has(`${x},${y},1`))
        return true;
      // 다른 기둥 위에 있을 때
      if (structures.has(`${x},${y - 1},0`)) return true;
      return false;
    } else {
      if (
        structures.has(`${x + 1},${y},1`) &&
        structures.has(`${x - 1},${y},1`)
      )
        return true;
      if (
        structures.has(`${x},${y - 1},0`) ||
        structures.has(`${x + 1},${y - 1},0`)
      )
        return true;
      return false;
    }
  }
  function canRemove(x, y, a) {
    structures.delete(`${x},${y},${a}`);
    let canDelete = true;
    for (const structure of structures) {
      const [sx, sy, sa] = structure.split(",").map(Number);
      if (!canBuild(sx, sy, sa)) {
        canDelete = false;
        break;
      }
    }
    structures.add(`${x},${y},${a}`);
    return canDelete;
  }
  for (const [x, y, a, b] of build_frame) {
    if (b === 1) {
      // 설치
      if (canBuild(x, y, a)) {
        structures.add(`${x},${y},${a}`);
      }
    } else {
      // 삭제
      if (canRemove(x, y, a)) {
        structures.delete(`${x},${y},${a}`);
      }
    }
  }
  return [...structures]
    .map((s) => s.split(",").map(Number))
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[2] - b[2];
    });
}
console.log(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ])
);
