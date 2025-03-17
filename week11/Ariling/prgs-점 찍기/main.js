function solution(k, d) {
  var answer = 0;
  let x = 0;
  let total = d * d;
  while (x <= d) {
    // 그 예전에 원점에서 점사이 구하기 거리 공식을 활용하여 필요한 y갯수를 더한다. 냅다 공식을 하면 시간초과가 나온다.
    let range_num = total - x * x;
    // 0,0 이런건 제외를 시키기 때문에 포함하려면 1씩 더하기
    answer += Math.floor(Math.sqrt(range_num) / k) + 1;
    x += k;
  }
  return answer;
}
