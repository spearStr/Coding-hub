function solution(begin, target, words) {
  var answer;
  const wordLen = begin.length;

  if (!words.includes(target)) return 0;

  function dfs(path, words) {
    const latest = path[path.length - 1];
    if (latest === target) {
      if (!answer || answer > path.length) answer = path.length;
      return;
    }

    if (answer && path.length >= answer - 1) return;

    for (let word of words) {
      let differ = 0;
      for (let i = 0; i < wordLen; i++) {
        if (latest[i] != word[i]) differ++;
      }
      if (differ === 1) {
        dfs(
          [...path, word],
          words.filter((w) => w !== word)
        );
      }
    }

    return;
  }

  dfs([begin], words);
  return answer ? answer - 1 : 0;
}
