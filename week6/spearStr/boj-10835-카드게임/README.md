# 🔎 BOJ-10835 카드게임
## 💡 아이디어
- DP
## ✔ 문제풀이
- left와 right를 옮겨가며 2차원 DP를 풀어야 한다.
- left의 수가 right의 수보다 큰 경우에는 right의 점수를 얻고 dp[left][right + 1]의 값을 더해준다
- 그 반대의 경우에는 dp[left + 1][right + 1](둘다 버리는 경우)와 dp[left + 1][right](왼쪽만 버리는 경우)의 최댓값을 넣어준다.

## 🤕 어려웠던 점
- 할 만 했다.