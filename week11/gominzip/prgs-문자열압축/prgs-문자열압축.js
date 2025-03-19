function solution(s) {
  var answer = s.length;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const result = compressString(i, s);
    answer = Math.min(answer, result.length);
  }
  return answer;
}

function compressString(unit, s) {
  let result = "";
  let base = s.substring(0, unit);
  let count = 1;

  for (let i = unit; i < s.length; i += unit) {
    // unit만큼 분할
    let curr = s.substring(i, i + unit);
    if (curr === base) {
      count++;
    } else {
      result += (count > 1 ? count : "") + base;
      base = curr;
      count = 1;
    }
  }

  result += (count > 1 ? count : "") + base;
  return result;
}
