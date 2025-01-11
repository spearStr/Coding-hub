import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
min_dist = int(1e9)
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]
checked = [[False] * N for _ in range(N)]
def bfs(r, c, num):
    q = deque([(r, c)])
    checked[r][c] = True
    arr[r][c] = num
    while q:
        x, y = q.popleft()
        for i in range(4):
            newX = x + dr[i]
            newY = y + dc[i]
            if 0 <= newX < N and 0 <= newY < N and arr[newX][newY] == 1 and not checked[newX][newY]:
                arr[newX][newY] = num
                checked[newX][newY] = True
                q.append((newX, newY))
def search(r, c):
    q = deque([(r, c, 0)])
    visited = [[False] * N for _ in range(N)]
    visited[r][c] = True
    global min_dist
    while q:
        x, y, dist = q.popleft()
        if dist >= min_dist:  
            continue
        for i in range(4):
            newX = x + dr[i]
            newY = y + dc[i]
            if 0 <= newX < N and 0 <= newY < N and not visited[newX][newY] and arr[newX][newY] != arr[r][c]:
                if arr[newX][newY] != 0:
                    min_dist = min(min_dist, dist)
                else:
                    visited[newX][newY] = True
                    q.append((newX, newY, dist+1))
count = 1
for i in range(N):
    for j in range(N):
        if arr[i][j] == 1 and not checked[i][j]:
            bfs(i, j, count)
            count += 1
for i in range(N):
    for j in range(N):
        if arr[i][j] != 0:
            search(i, j)
print(min_dist)