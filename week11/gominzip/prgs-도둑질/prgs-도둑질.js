function solution(money) {
  const n = money.length;
  const firstDp = [0, ...money.slice(0, n - 1)];
  const secondDp = [0, ...money.slice(1, n)];

  for (let i = 2; i < n; i++) {
    firstDp[i] = Math.max(firstDp[i - 1], firstDp[i - 2] + firstDp[i]);
    secondDp[i] = Math.max(secondDp[i - 1], secondDp[i - 2] + secondDp[i]);
  }

  return Math.max(firstDp[n - 1], secondDp[n - 1]);
}
