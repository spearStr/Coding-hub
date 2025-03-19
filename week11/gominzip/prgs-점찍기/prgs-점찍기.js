function solution(k, d) {
  var answer = 0;
  for (let a = 0; a * k <= d; a++) {
    let maxB = Math.sqrt(d ** 2 - (a * k) ** 2);
    maxB = Math.floor(maxB / k);
    answer += maxB + 1;
  }
  return answer;
}
