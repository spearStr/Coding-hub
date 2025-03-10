function solution(plans) {
  var answer = [];

  plans = plans
    .map(([name, start, playtime]) => [name, stringToTime(start), Number(playtime)])
    .sort((a, b) => a[1] - b[1]);

  const stack = [];
  let top = -1;

  // 전체 작업 스택에 쌓기
  for (let newPlan of plans) {
    // 스택에 쌓인 작업들의 남은 시간 조정
    let diff = top < 0 ? 0 : newPlan[1] - stack[top][1];
    while (stack.length) {
      if (diff >= stack[top][2]) {
        diff -= stack[top][2];
        answer.push(stack.pop()[0]);
        top--;
      } else {
        stack[top][2] -= diff;
        diff -= stack[top][2];
        break;
      }
    }

    stack.push(newPlan);
    top++;
  }

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }

  return answer;
}

function stringToTime(str) {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
}
