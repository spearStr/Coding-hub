function solution(gems) {
  var answer = [];
  let distance = Infinity;
  const n = new Set(gems).size;
  const window = new Map();

  let start = 0;
  for (let end = 0; end < gems.length; end++) {
    window.set(gems[end], (window.get(gems[end]) || 0) + 1);
    while (window.size === n) {
      if (end - start < distance) {
        distance = end - start;
        answer = [start + 1, end + 1];
      }

      window.set(gems[start], window.get(gems[start]) - 1);
      if (window.get(gems[start]) === 0) window.delete(gems[start]);
      start++;
    }
  }
  return answer;
}
