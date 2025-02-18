function solution(places) {
  var answer = [];
  for (const place of places) {
    const arr = [];
    let keeping = true;
    for (const row of place) {
      arr.push(row.split(""));
    }
    let people_pos = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] === "P") people_pos.push([i, j]);
      }
    }
    people_pos = people_pos.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    for (let i = 0; i < people_pos.length; i++) {
      for (let j = i + 1; j < people_pos.length; j++) {
        const [r1, c1] = people_pos[i];
        const [r2, c2] = people_pos[j];
        let row_diff = Math.abs(r1 - r2);
        let col_diff = Math.abs(c1 - c2);
        let dis = row_diff + col_diff;
        if (dis < 2) {
          keeping = false;
          break;
        } else if (dis == 2) {
          if (row_diff == 2) {
            if (arr[r1 + 1][c1] !== "X") {
              keeping = false;
              break;
            }
          } else if (col_diff == 2) {
            if (arr[r1][c1 + 1] !== "X") {
              keeping = false;
              break;
            }
          } else {
            if (arr[r2][c1] !== "X" || arr[r1][c2] !== "X") {
              keeping = false;
              break;
            }
          }
        }
      }
      if (!keeping) break;
    }
    keeping ? answer.push(1) : answer.push(0);
  }
  return answer;
}
