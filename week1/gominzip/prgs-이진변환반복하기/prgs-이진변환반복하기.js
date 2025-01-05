function solution(s) {
  let conversionCount = 0;
  let zerosRemoved = 0;

  while (s !== "1") {
    let zero = s.split("0").length - 1;
    s = toBinary(s.length - zero);

    zerosRemoved += zero;
    conversionCount++;
  }
  return [conversionCount, zerosRemoved];
}

function toBinary(n) {
  if (n === 0) return "0";

  let result = "";
  while (n > 0) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }
  return result;
}
