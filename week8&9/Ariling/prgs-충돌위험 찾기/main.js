function solution(points, routes) {
  var answer = 0;
  let point_map = {};
  // 포인트 위치 담기
  for (let i = 0; i < points.length; i++) {
    const [r, c] = points[i];
    point_map[i + 1] = [r, c];
  }
  let route_arr = [];
  let max_len = -1;
  for (let i = 0; i < routes.length; i++) {
    let [curR, curC] = point_map[routes[i][0]];
    const pos_arr = [[curR, curC]];
    for (let j = 1; j < routes[i].length; j++) {
      // 현재 위치에서 가야할 지점 위치 차이 구하기
      let r_diff = curR - point_map[routes[i][j]][0];
      let c_diff = curC - point_map[routes[i][j]][1];
      // 행 먼저 이동한다고 하니 r_diff부터 처리
      while (r_diff != 0) {
        curR += r_diff < 0 ? 1 : -1;
        r_diff += r_diff > 0 ? -1 : 1;
        pos_arr.push([curR, curC]);
      }
      while (c_diff != 0) {
        curC += c_diff < 0 ? 1 : -1;
        c_diff += c_diff > 0 ? -1 : 1;
        pos_arr.push([curR, curC]);
      }
    }
    if (max_len < pos_arr.length) {
      max_len = pos_arr.length;
    }
    route_arr.push(pos_arr);
  }
  for (let i = 0; i < max_len; i++) {
    // filter와 map을 통해서 이동 시점에서 이동하는 좌표들만 담기
    let values = route_arr.filter((el) => i < el.length).map((el) => el[i]);
    let seen = new Set();
    let duplicate = new Set();
    // set을 활용하여 중복 유무를 따지기
    for (let j = 0; j < values.length; j++) {
      const [r, c] = values[j];
      if (seen.has(`${r}, ${c}`)) {
        duplicate.add(`${r}, ${c}`);
      } else {
        seen.add(`${r}, ${c}`);
      }
    }
    answer += duplicate.size;
  }
  return answer;
}
