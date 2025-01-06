import sys
input = sys.stdin.readline
from collections import deque
R, C = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(R)]
check_arr = [[False] * C for _ in range(R)]
# 그림 갯수, 그림 최대 넓이
result_arr = [0, 0]

def bfs(i, j):
    q = deque([])
    q.append((i, j))
    check_arr[i][j] = True
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    cnt = 0
    while q:
        r, c = q.popleft()
        cnt += 1
        for k in range(4):
            newR = r + dr[k]
            newC = c + dc[k]
            if 0 <= newR < R and 0 <= newC < C and not check_arr[newR][newC] and arr[newR][newC] == 1:
                check_arr[newR][newC] = True
                q.append((newR, newC))
    return cnt
for i in range(R):
    for j in range(C):
        if not check_arr[i][j] and arr[i][j] == 1:
            width = bfs(i, j)
            result_arr[0] += 1
            result_arr[1] = max(result_arr[1], width)
for i in range(len(result_arr)):
    print(result_arr[i])