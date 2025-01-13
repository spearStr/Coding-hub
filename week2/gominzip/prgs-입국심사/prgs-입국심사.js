function solution(n, times) {
  var answer = 1000000000 * 1000000000;
  let start = 1;
  let end = answer;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    for (let time of times) {
      count += Math.floor(mid / time);
    }

    if (count >= n) {
      answer = mid;
      end = mid - 1;
    } else if (count < n) {
      start = mid + 1;
    }
  }
  return answer;
}
