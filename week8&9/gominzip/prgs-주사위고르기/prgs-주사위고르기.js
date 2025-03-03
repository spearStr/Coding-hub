function binarySearch(target, nums) {
  let [start, end] = [0, nums.length];
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) start = mid + 1;
    else end = mid;
  }
  return start;
}

function getCombinations(arr, r) {
  return arr.reduce((acc, val, i) => {
    if (r === 1) return [...acc, [val]];
    return [...acc, ...getCombinations(arr.slice(i + 1), r - 1).map((comb) => [val, ...comb])];
  }, []);
}

function calculateDiceSums(currCase, dice, caseIdx, total, out) {
  if (caseIdx === currCase.length) {
    out.push(total);
    return;
  }

  for (const d of dice[currCase[caseIdx]]) {
    calculateDiceSums(currCase, dice, caseIdx + 1, total + d, out);
  }
}

function solution(dice) {
  const half = Math.floor(dice.length / 2);
  const cases = getCombinations(
    Array.from({length: dice.length}, (_, i) => i),
    half
  );

  const sumCases = {};
  cases.forEach((currCase, i) => {
    const out = [];
    calculateDiceSums(currCase, dice, 0, 0, out);
    out.sort((a, b) => a - b);
    sumCases[i] = out;
  });

  let maxWins = 0;
  let winningCombos = [];

  for (const [key, value] of Object.entries(sumCases)) {
    const Acase = value;
    const Bcase = sumCases[cases.length - key - 1];

    let winCount = 0;
    for (const v of Acase) {
      winCount += binarySearch(v, Bcase);
    }
    if (winCount > maxWins) {
      maxWins = winCount;
      winningCombos = cases[key];
    }
  }

  return winningCombos.map((v) => v + 1);
}
