function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    var stack = [];
    var pattern_cnt = 0;
    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] === "1") {
        stack.push(s[i][j]);
      } else {
        if (stack.length >= 2 && stack.at(-1) === "1" && stack.at(-2) == "1") {
          stack.pop();
          stack.pop();
          pattern_cnt++;
        } else {
          stack.push(s[i][j]);
        }
      }
    }
    content = stack.join("");
    let found = false;
    for (let k = content.length - 1; k >= 0; k--) {
      if (content[k] === "0") {
        answer.push(
          content.slice(0, k + 1) +
            "110".repeat(pattern_cnt) +
            content.slice(k + 1, content.length)
        );
        found = true;
        break;
      }
    }
    if (!found) {
      answer.push("110".repeat(pattern_cnt) + content);
    }
  }
  return answer;
}
