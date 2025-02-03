import sys
input = sys.stdin.readline

[N, M] = list(map(int, input().split()))
byteArr = list(map(int, input().split()))
costArr = list(map(int, input().split()))
byteArr.insert(0, 0)
costArr.insert(0,0)
totalCost = sum(costArr)
result = sum(costArr)
dp = [[0] * (totalCost + 1) for _ in range(N+1)]
for i in range(1, N+1):
    byte = byteArr[i]
    cost = costArr[i]
    for j in range(totalCost + 1):
        if j < cost:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(byte+dp[i-1][j-cost], dp[i-1][j])
        if dp[i][j] >= M:
            result = min(result, j)
if M == 0:
    print(0)
else:
    print(result)