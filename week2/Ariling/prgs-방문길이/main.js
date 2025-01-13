function solution(dirs) {
  var answer = 0;
  var move_set = new Set();
  var x = 0;
  var y = 0;
  for (let i = 0; i < dirs.length; i++) {
    var newX = x;
    var newY = y;
    if (dirs[i] === "U" && y + 1 <= 5) {
      newY += 1;
    } else if (dirs[i] === "D" && y - 1 >= -5) {
      newY -= 1;
    } else if (dirs[i] === "L" && x - 1 >= -5) {
      newX -= 1;
    } else if (dirs[i] === "R" && x + 1 <= 5) {
      newX += 1;
    }
    if (newX == x && newY == y) {
      continue;
    } else {
      move_set.add(`${y},${x},${newY},${newX}`);
      move_set.add(`${newY},${newX},${y},${x}`);
      x = newX;
      y = newY;
    }
  }
  answer = Math.floor(move_set.size / 2);
  return answer;
}
