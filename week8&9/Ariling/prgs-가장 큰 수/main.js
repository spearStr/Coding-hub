function solution(numbers) {
  if (numbers.every((num) => num === 0)) return "0";
  let str_arr = numbers.map((e) => String(e)).sort((a, b) => b + a - (a + b));
  return str_arr.join("");
}
