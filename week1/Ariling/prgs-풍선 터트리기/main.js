function solution(a) {
  var answer = 0;
  var left_arr = [];
  var right_arr = [];
  var left_min = Infinity;
  var right_min = Infinity;
  for (let x = 0; x < a.length; x++) {
    left_min = Math.min(left_min, a[x]);
    left_arr.push(left_min);
  }
  for (let x = a.length - 1; x >= 0; x--) {
    right_min = Math.min(right_min, a[x]);
    right_arr.push(right_min);
  }
  right_arr = right_arr.reverse();
  for (let x = 0; x < a.length; x++) {
    if (left_arr[x] < a[x] && right_arr[x] < a[x]) {
      continue;
    } else {
      answer += 1;
    }
  }
  return answer;
}
