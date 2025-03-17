function solution(money) {
  // 첫번쨰랑 마지막만 고려할 것..
  // 이거는 첫번째를 골랐을 경우, 마지막은 고려하지 않는다.
  const first_dp = Array(1000001).fill(0);
  // 이거는 첫번째를 고르지 않은 경우, 마지막을 포함시킨다.
  const not_first_dp = Array(1000001).fill(0);
  const N = money.length;
  // 3개 이상이므로 0,1 인덱싱은 무조건 있는 것
  // 처음 초기화에서 막혀서 1번 테케를 자꾸 틀렸다..
  first_dp[0] = money[0];
  first_dp[1] = Math.max(money[0], money[1]);
  not_first_dp[1] = money[1];
  for (let i = 2; i < money.length - 1; i++) {
    first_dp[i] = Math.max(first_dp[i - 1], first_dp[i - 2] + money[i]);
    not_first_dp[i] = Math.max(
      not_first_dp[i - 1],
      not_first_dp[i - 2] + money[i]
    );
  }
  if (N == 3) {
    first_dp[2] = Math.max(money[2], first_dp[1], first_dp[0]);
    not_first_dp[2] = Math.max(money[2], not_first_dp[1], not_first_dp[0]);
  } else {
    not_first_dp[N - 1] = Math.max(
      not_first_dp[N - 2],
      not_first_dp[N - 3] + money[N - 1]
    );
  }
  return Math.max(first_dp[N - 2], not_first_dp[N - 1]);
}
