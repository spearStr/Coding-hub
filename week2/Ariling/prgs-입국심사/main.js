function solution(n, times) {
  var answer = Infinity;
  var times = times.sort((a, b) => a - b);
  var left = 1;
  var right = times.at(-1) * n;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    var pass_num = 0;
    for (let i = 0; i < times.length; i++) {
      pass_num += Math.floor(mid / times[i]);
    }
    if (pass_num >= n) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
