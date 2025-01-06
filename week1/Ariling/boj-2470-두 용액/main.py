import sys
input = sys.stdin.readline

# 이분 탐색
inf = int(1e9)
N = int(input())
arr = list(map(int, input().split()))
arr = sorted(arr)
left , right = 0, N-1
result = [arr[left], arr[right]]
min_dif = abs(arr[left] + arr[right])
while left < right:
    dif = arr[left] + arr[right]
    if abs(dif) < min_dif:
        min_dif = abs(dif)
        result = [arr[left], arr[right]]
        if min_dif == 0:
            break
    if dif < 0:
        left += 1
    else:
        right -= 1
print(result[0], result[1])
