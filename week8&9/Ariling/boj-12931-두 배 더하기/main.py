import sys
input = sys.stdin.readline


N = int(input())
arr = list(map(int, input().split()))
# 이거 홀수이면 1을 빼고 다 짝수면 나누기 2하고 이건데..
answer = 0
while not all(x == 0 for x in arr):
    odd_idx = -1
    for i in range(len(arr)):
        if arr[i] % 2 == 1:
            odd_idx = i
            break
    if odd_idx != -1:
        arr[odd_idx] -= 1
    else:
        arr = [x // 2 for x in arr]
    answer += 1
print(answer)

