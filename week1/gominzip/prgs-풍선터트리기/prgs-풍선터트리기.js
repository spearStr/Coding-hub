function solution(a) {
  if (a.length <= 2) return a.length;

  let answer = 0;

  let leftMin = a[0];
  const rightMinArr = Array(a.length).fill(0);

  rightMinArr[a.length - 1] = a[a.length - 1];
  for (let i = a.length - 2; i >= 0; i--) {
    rightMinArr[i] = Math.min(rightMinArr[i + 1], a[i]);
  }

  for (let i = 0; i < a.length; i++) {
    if (
      i === 0 ||
      i === a.length - 1 ||
      a[i] <= leftMin ||
      a[i] <= rightMinArr[i]
    ) {
      answer++;
    }

    leftMin = Math.min(leftMin, a[i]);
  }

  return answer;
}
