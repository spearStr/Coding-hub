import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
info = [list(map(int, input().split(" "))) for _ in range(N)]
graph = [[] for _ in range(N+1)]
building_time = [0] * (N+1)
indegrees = [0] * (N+1)
total_time = [0] * (N+1)

for i in range(len(info)):
    building_time[i + 1] = info[i][0]
    total_time[i + 1] = info[i][0]
    if len(info[i]) == 2:
        continue
    else:
        for j in range(1, len(info[i]) - 1):
            graph[info[i][j]].append(i + 1)
            indegrees[i + 1] += 1
q = deque([])
for i in range(1, len(indegrees)):
    if indegrees[i] == 0:
        q.append(i)
while q:
    current = q.popleft()
    for i in range(len(graph[current])):
        next = graph[current][i]
        indegrees[next] -= 1
        total_time[next] = max(total_time[next], building_time[next] + total_time[current])
        if indegrees[next] == 0:
            q.append(next)
for i in range(1, len(total_time)):
    print(total_time[i])