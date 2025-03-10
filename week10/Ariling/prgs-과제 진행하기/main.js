function solution(plans) {
  var answer = [];
  const pending = [];
  const process = [];

  plans = plans
    .map((el) => [
      el[0],
      parseInt(el[1].slice(0, 2)) * 60 + parseInt(el[1].slice(3)),
      parseInt(el[2]),
    ])
    .sort((a, b) => a[1] - b[1]);

  let time = plans[0][1];
  process.push(plans[0]);
  let idx = 1;

  while (answer.length < plans.length) {
    // 새 과제가 있고 현재 진행 중인 과제가 있을 때
    if (idx < plans.length && process.length > 0) {
      if (plans[idx][1] < time + process[0][2]) {
        const timeSpent = plans[idx][1] - time;
        process[0][2] -= timeSpent;

        pending.push(process.pop());

        process.push(plans[idx]);
        time = plans[idx][1];
        idx++;
      }
      // 현재 과제를 끝낼 수 있는 경우
      else {
        // 현재 과제 완료
        const currentTask = process.pop();
        time += currentTask[2];
        answer.push(currentTask[0]);

        // 다음 과제 결정
        if (idx < plans.length && time <= plans[idx][1]) {
          while (pending.length > 0 && time < plans[idx][1]) {
            const nextTask = pending.pop();

            if (time + nextTask[2] <= plans[idx][1]) {
              time += nextTask[2];
              answer.push(nextTask[0]);
            } else {
              nextTask[2] -= plans[idx][1] - time;
              pending.push(nextTask);
              time = plans[idx][1];
              break;
            }
          }

          process.push(plans[idx]);
          time = Math.max(time, plans[idx][1]);
          idx++;
        } else if (pending.length > 0) {
          process.push(pending.pop());
        } else if (idx < plans.length) {
          process.push(plans[idx]);
          time = plans[idx][1];
          idx++;
        }
      }
    } else if (process.length > 0) {
      const currentTask = process.pop();
      time += currentTask[2];
      answer.push(currentTask[0]);
      if (pending.length > 0) {
        process.push(pending.pop());
      }
    } else if (pending.length > 0) {
      process.push(pending.pop());
    } else {
      break;
    }
  }

  return answer;
}
