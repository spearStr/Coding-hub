function solution(numbers) {
  numbers.sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString()));

  if (numbers[0] === 0) return "0";
  return numbers.join("");
}
