import sys
input = sys.stdin.readline
# k 는 높이
# 이거는 트리 정보...가 아니네?
k = int(input())
info = list(map(int, input().split()))
info.insert(0, 0)
sum_arr = [0] * len(info)
# 2, 4, 8 , 16 이런식으로 있는 것..
depth = 2**(k+1) - 2
key = depth // 2
while key >= 1:
    for i in range(key, (2*key)+1, 2):
        temp1 = info[i] + sum_arr[i]
        temp2 = info[i+1] + sum_arr[i+1]
        gap = abs(temp1 - temp2)
        maxVal = max(temp1, temp2)
        sum_arr[i//2] = maxVal
        if temp1 > temp2:
            info[i + 1] += gap
        elif temp1 < temp2:
            info[i] += gap
    key = (key//2)
print(sum(info))