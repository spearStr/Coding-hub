function solution(distance, rocks, n) {
  var answer = 0;
  rocks = rocks.sort((a, b) => a - b);
  rocks.push(distance);
  let left = 0;
  let right = distance;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let remove_cnt = 0;
    let dis_diff = 0;
    let break_pnt = 0;
    // 거리의 최솟값
    let result = Infinity;
    for (const rock of rocks) {
      // 돌과 중간지점까지 구하기
      dis_diff = rock - break_pnt;
      if (dis_diff < mid) {
        // 중간값보다 작으면 그 때 삭제로 친다. -> Mid가 최소라고 생각하는 거니깐
        remove_cnt++;
      } else {
        // dis_diff를 업데이트 하고 거리 초기화 및 break_pnt를 저장해둔다.
        if (result > dis_diff) {
          result = dis_diff;
        }
        break_pnt = rock;
      }
    }
    // n보다 많으면 그 거리는 고려대상이 X
    if (remove_cnt > n) {
      right = mid - 1;
    } else {
      // answer값 갱신 -> 이거의 도움을 받음
      answer = mid;
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
