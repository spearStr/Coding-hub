function solution(s) {
  var answer = [0, 0];
  while (s !== "1") {
    for (let x = 0; x < s.length; x++) {
      if (s[x] === "0") {
        answer[1] += 1;
      }
    }
    s = s.replaceAll("0", "");
    answer[0] += 1;
    let len = s.length;
    s = String(len.toString(2));
  }
  return answer;
}
