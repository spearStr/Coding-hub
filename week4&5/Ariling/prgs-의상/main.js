function solution(clothes) {
  var answer = 1;
  const clothesMap = {};
  for (const el of clothes) {
    const [cloth, type] = el;
    if (clothesMap.hasOwnProperty(type)) {
      clothesMap[type]++;
    } else {
      clothesMap[type] = 1;
    }
  }
  for (const key in clothesMap) {
    answer *= clothesMap[key] + 1;
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
