function solution(s) {
  var answer = [];

  const move110 = (str) => {
    let stack = [];

    for (let char of str) {
      stack.push(char);
      if (
        stack.length >= 3 &&
        stack[stack.length - 1] === "0" &&
        stack[stack.length - 2] === "1" &&
        stack[stack.length - 3] === "1"
      ) {
        stack.pop();
        stack.pop();
        stack.pop();
      }
    }

    let baseStr = stack.join("");
    const diff = str.length - baseStr.length;
    const count = Math.floor(diff / 3);

    let str110 = "110".repeat(count);

    let has11 = -1;
    let has0 = -1;

    for (let i = 0; i < baseStr.length; i++) {
      if (has11 === -1 && baseStr[i] === "1" && baseStr[i + 1] === "1")
        has11 = i;
      if (baseStr[i] === "0") has0 = i;
    }

    if (has11 !== -1) {
      baseStr = baseStr.slice(0, has11) + str110 + baseStr.slice(has11);
    } else if (has0 !== -1) {
      baseStr = baseStr.slice(0, has0 + 1) + str110 + baseStr.slice(has0 + 1);
    } else {
      baseStr = str110 + baseStr;
    }

    return baseStr;
  };

  for (let v of s) {
    answer.push(move110(v));
  }

  return answer;
}
