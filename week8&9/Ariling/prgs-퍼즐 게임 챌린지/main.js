function solution(diffs, times, limit) {
  let [left, right] = [1, 1];
  // 이렇게 해야 해결이 된다고 한다.. 신기신기
  diffs.forEach((item) => {
    if (right < item) right = item;
  });
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let clear_time = diffs[0] > mid ? times[0] * (diffs[0] - mid) : times[0];
    for (let i = 1; i < times.length; i++) {
      if (clear_time > limit) break;
      if (diffs[i] > mid) {
        clear_time += (times[i] + times[i - 1]) * (diffs[i] - mid) + times[i];
      } else {
        clear_time += times[i];
      }
    }
    if (clear_time <= limit) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
