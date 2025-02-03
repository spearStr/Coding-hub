function solution(distance, rocks, n) {
  var answer = 0;
  let low = 0,
    high = distance;

  rocks.push(distance);
  rocks.sort((a, b) => a - b);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let start = 0,
      cnt = 0;

    for (let rock of rocks) {
      if (rock - start < mid) {
        cnt++;
      } else {
        start = rock;
      }
    }

    if (cnt <= n) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}
