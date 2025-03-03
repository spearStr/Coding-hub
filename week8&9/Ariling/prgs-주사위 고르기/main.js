function solution(dice) {
  const combiArr = [];
  // 조합 구하기
  function combination(combi, n, index) {
    if (n === Math.floor(dice.length / 2)) {
      combiArr.push([...combi]);
      return;
    }
    if (index === dice.length) return;
    combi.push(index);
    combination(combi, n + 1, index + 1);
    combi.pop();
    combination(combi, n, index + 1);
  }
  combination([], 0, 0);
  // 주사위 조합으로 나올 수 있는 모든 합 계산
  function getSums(combi) {
    const sums = [];
    function calSums(cnt, sum) {
      if (cnt == Math.floor(dice.length / 2)) {
        sums.push(sum);
        return;
      }
      for (let i = 0; i < 6; i++) {
        calSums(cnt + 1, sum + dice[combi[cnt]][i]);
      }
    }
    calSums(0, 0);
    return sums;
  }
  let maxWins = 0;
  let answerCombi = [];
  for (const combiA of combiArr) {
    const combiB = Array.from(Array(dice.length).keys()).filter(
      (i) => !combiA.includes(i)
    );
    const sumsA = getSums(combiA);
    const sumsB = getSums(combiB).sort((a, b) => a - b);
    // A가 이기는 경우 계산하기
    let wins = 0;
    for (const a of sumsA) {
      let left = 0;
      let right = sumsB.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (sumsB[mid] < a) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      wins += left;
      if (wins > maxWins) {
        maxWins = wins;
        answerCombi = combiA.map((i) => i + 1);
      }
    }
  }
  return answerCombi;
}
