function solution(food_times, k) {
  // 너무 범위가 커서 dp 아니면 이분탐색 활용인 것 같음.. 두번째... 런타임 에러... 14.7%에서 멈춤
  // 이분탐색인경우에는 런타임에러가 떴다..
  const food_arr = food_times.map((el, idx) => [el, idx + 1]);
  const sum = food_times.reduce((a, b) => a + b, 0);
  if (sum <= k) return -1;
  let left = 0;
  let right = 0;
  // 몰랐는데 스프레드를 하면 메모리 초과가 발생한다. -> 그냥 기본을 하는게 베스트..!
  for (const time of food_times) {
    right = Math.max(right, time);
  }
  // 최대 사이클 구하기
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let totalEat = 0;
    for (const time of food_times) {
      totalEat += Math.min(time, mid);
    }
    if (totalEat <= k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  let remainK = k;
  for (const foodInfo of food_arr) {
    // right 만큼 감소시키기 left는 더 많아질 것이므로 X
    remainK -= Math.min(foodInfo[0], right);
  }
  const remain_arr = food_arr.filter((el) => el[0] > right);
  if (remain_arr.length === 0) return -1;
  remain_arr.sort((a, b) => a[1] - b[1]);
  return remain_arr[remainK % remain_arr.length][1];
}
