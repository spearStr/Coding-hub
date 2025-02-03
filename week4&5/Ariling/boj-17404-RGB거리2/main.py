import sys
input = sys.stdin.readline

N = int(input())
arr = [list(map(int, input().split(" ")))for _ in range(N)]
# dp 돌리기, 순환 시켜야 하므로 세 번 돌리기
INF = int(1e9)
answer = INF
for i in range(3):
    dp = [[INF] * 3 for _ in range(N)]
    dp[0][i] = arr[0][i]
    for j in range(1, N):
        dp[j][0] = min(dp[j-1][1], dp[j-1][2]) + arr[j][0]
        dp[j][1] = min(dp[j-1][0], dp[j-1][2]) + arr[j][1]
        dp[j][2] = min(dp[j-1][0], dp[j-1][1]) + arr[j][2]
    for j in range(3):
        if i != j:
            answer = min(answer, dp[N-1][j])
print(answer)