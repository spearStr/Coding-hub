const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function validString(str) {
  if (str === "") return true;

  if (str.startsWith("01")) {
    return validString(str.slice(2));
  }

  if (str.startsWith("100")) {
    let i = 3;
    while (i < str.length && str[i] === "0") i++;
    if (i === str.length) return false;

    while (i < str.length && str[i] === "1") i++;

    if (i === str.length) return true;

    return validString(str.slice(str[i - 2] === "1" && str[i + 1] === "0" ? i - 1 : i));
  }

  return false;
}

const answer = validString(input) ? "SUBMARINE" : "NOISE";

console.log(answer);
