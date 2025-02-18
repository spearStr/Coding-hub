function solution(gems) {
  // 시작점, 끝점
  var answer = [1, 0];
  let st = 1;
  let ed = 1;
  let answer_len = gems.length + 1;
  // 보석 종류 갯수 구하기
  let gems_set = new Set(gems);
  // 구간 길이 구하기, 그리고 보석 카운트를 상수로 하기(Object.keys(gems_dict).length 이게 더 시간이 오래 걸린다.)
  let gems_dict = {};
  let gems_cnt = 0;
  for (let i = 0; i < gems.length; i++) {
    if (!gems_dict[gems[i]]) {
      gems_dict[gems[i]] = 0;
      gems_cnt += 1;
    }
    gems_dict[gems[i]] += 1;
    // 1번 인덱스는 이미 앞에서 초기화하였기 때문
    if (i > 0) {
      ed += 1;
    }
    // st-1이 1보다 클 때 st를 앞으로 나아가게 하기
    if (gems_dict[gems[st - 1]] > 1) {
      while (gems_dict[gems[st - 1]] > 1) {
        gems_dict[gems[st - 1]] -= 1;
        st += 1;
      }
    }
    // 조건에 맞을 때 갱신하도록 처리
    if (gems_cnt === gems_set.size && ed - st + 1 < answer_len) {
      answer_len = ed - st + 1;
      answer = [st, ed];
    }
  }
  return answer;
}
