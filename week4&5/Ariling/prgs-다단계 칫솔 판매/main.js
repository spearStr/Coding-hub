function solution(enroll, referral, seller, amount) {
  // 하나 당 100 원인데
  // 만약에 아래에서 발생했으면 10% 씩 점점 이득을 얻는다는 거지? 예를 들어 90% 9% 0.9% 이런식으로...
  // 10%는 그냥 나뉘어 떨어지는 그런걸로 보면 되나보다. 10%했을때 0.9원이면 그냥 0원인거
  // 이건 이진트리가 아니라서... 그냥 키를 담고 키 안에 프로퍼티가 있으면 그 타고타고 올라가면 되는 거 아닐까?
  // 민호는 일단 넣어야 해 center로
  const parentMap = {};
  const moneyMap = {};
  // parentMap, moneyMap넣기
  for (let i = 0; i < enroll.length; i++) {
    const name = enroll[i];
    const referWith = referral[i];
    parentMap[name] = referWith === "-" ? "center" : referWith;
    moneyMap[name] = 0;
  }
  // seller에 따라서 while문을 돌며 처리하기
  for (let i = 0; i < seller.length; i++) {
    let current = seller[i];
    let sellMoney = amount[i] * 100;
    while (current !== "center" && sellMoney > 0) {
      let percentMoney = Math.floor(sellMoney * 0.1);
      moneyMap[current] += sellMoney - percentMoney;
      if (percentMoney === 0) break; // 이거 추가하기, 0원이면 굳이 더 타고 올라갈 필요가 없기 때문
      sellMoney = percentMoney;
      current = parentMap[current];
    }
  }
  var answer = [];
  // 이름 순서대로 출력을 해야하므로 moneyMap[key]의 value값을 answer에 추가한다.
  for (const name of enroll) {
    answer.push(moneyMap[name]);
  }
  return answer;
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
