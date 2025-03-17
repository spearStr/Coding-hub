function solution(s) {
  const N = s.length;
  var answer = N;
  // 1개부터 /2까지 구해보기...
  const compare_N = Math.floor(N / 2);
  function findRepeats(s, len) {
    const result = [];
    for (let i = 0; i < s.length; i += len) {
      const pattern = s.substring(i, i + len);
      result.push(pattern);
    }
    return result;
  }
  function compressArr(sliceArr) {
    let compressed = "";
    let cnt = 1;
    let current = sliceArr[0];
    for (let i = 1; i < sliceArr.length; i++) {
      if (current === sliceArr[i]) {
        cnt++;
      } else {
        compressed += (cnt > 1 ? cnt : "") + current;
        current = sliceArr[i];
        cnt = 1;
      }
    }
    compressed += (cnt > 1 ? cnt : "") + current;
    return compressed;
  }
  for (let i = 1; i <= compare_N; i++) {
    const sliceArr = findRepeats(s, i);
    const compressed = compressArr(sliceArr);
    answer = Math.min(answer, compressed.length);
  }
  return answer;
}
console.log(solution("ababcdcdababcdcd"));
