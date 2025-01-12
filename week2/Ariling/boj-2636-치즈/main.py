import sys
from collections import deque
input = sys.stdin.readline

arr_info = list(map(int, input().split()))
arr = [list(map(int, input().split())) for _ in range(arr_info[0])]
total_cheese = 0
answer = 0
time = 0

for i in range(1, arr_info[0]-1):
    for j in range(1, arr_info[1]-1):
        if arr[i][j] == 1:
            total_cheese += 1
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]
def bfs(x, y):
    global checked
    q = deque([(x, y)])
    checked[x][y] = True
    while q:
        r, c = q.popleft()
        for i in range(4):
            newR = r + dr[i]
            newC = c + dc[i]
            if 0 <= newR < arr_info[0] and 0 <= newC < arr_info[1] and not checked[newR][newC]:
                if arr[newR][newC] == 1:
                    checked[newR][newC] = True
                    continue
                else:
                    checked[newR][newC] = True
                    q.append((newR, newC))

while total_cheese > 0:
    # 전의 치즈 갯수를 담기 위함
    answer = total_cheese
    checked = [[False] * arr_info[1] for _ in range(arr_info[0])]
    # 아? 가장자리만 하면 되는구나?
    bfs(0, 0)
    bfs(arr_info[0]-1, 0)
    bfs(0, arr_info[1]-1)
    bfs(arr_info[0]-1, arr_info[1]-1)
    disappear_cheese = 0
    for i in range(1, arr_info[0] - 1):
        for j in range(1, arr_info[1] - 1):
            if arr[i][j] == 1 and checked[i][j]:
                disappear_cheese += 1
                arr[i][j] = 0
    total_cheese -= disappear_cheese
    time += 1

print(time)
print(answer)


