function solution(food_times, k) {
  let max_time = 0;
  const queue = food_times.map((time, idx) => {
    max_time += time;
    return {time, idx: idx + 1};
  });

  if (max_time <= k) return -1;

  queue.sort((a, b) => b.time - a.time);

  let total = 0;
  let prev = 0;
  let size = queue.length;

  while (total + (queue[size - 1].time - prev) * size <= k) {
    const pick = queue.pop().time;
    total += (pick - prev) * size;
    size--;
    prev = pick;
  }

  queue.sort((a, b) => a.idx - b.idx);
  return queue[(k - total) % size].idx;
}
