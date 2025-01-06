import sys
input = sys.stdin.readline

N = int(input())
arr = []
for _ in range(N):
    infoes = input().split()
    arr.append((infoes[0], int(infoes[1]), int(infoes[2]), int(infoes[3])))
arr = sorted(arr, key=lambda x: (-x[1], x[2], -x[3], x[0]))

for i in range(len(arr)):
    print(arr[i][0])
