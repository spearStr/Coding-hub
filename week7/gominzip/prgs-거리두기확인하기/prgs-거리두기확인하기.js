function solution(places) {
  var answer = [];
  const offset = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const checkSocialDistance = (place) => {
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (place[x][y] !== "P") continue;

        for (const [dx, dy] of offset) {
          const [nx, ny] = [x + dx, y + dy];
          if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5 || place[nx][ny] === "X") continue;
          if (place[nx][ny] === "P") return false;
          if (place[nx][ny] === "O" && countNearbyPeople(nx, ny, place) >= 2) return false;
        }
      }
    }
    return true;
  };

  const countNearbyPeople = (cx, cy, place) => {
    let count = 0;
    for (const [dx, dy] of offset) {
      const [nx, ny] = [cx + dx, cy + dy];
      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      count += place[nx][ny] === "P" ? 1 : 0;
    }
    return count;
  };

  for (const place of places) {
    answer.push(checkSocialDistance(place) ? 1 : 0);
  }

  return answer;
}
