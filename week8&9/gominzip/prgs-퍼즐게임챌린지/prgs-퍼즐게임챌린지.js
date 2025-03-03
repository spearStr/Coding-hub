function solution(diffs, times, limit) {
  let left = 1,
    right = 100000;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const result = getTotalTime(diffs, times, mid);

    if (result <= limit) right = mid;
    else left = mid + 1;
  }

  return left;
}

function getTotalTime(diffs, times, level) {
  let totalTime = 0;
  for (let i = 0; i < diffs.length; i++) {
    const retry = diffs[i] > level ? diffs[i] - level : 0;
    const prevTime = i === 0 ? 0 : times[i - 1];
    totalTime += (times[i] + prevTime) * retry + times[i];
  }
  return totalTime;
}
