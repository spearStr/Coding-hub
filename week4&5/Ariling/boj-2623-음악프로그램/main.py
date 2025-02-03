import sys
from collections import deque
input = sys.stdin.readline

[N, M] = list(map(int, input().split()))
indegrees = [0] * (N+1)
graph = [[] for _ in range(N+1)]
for _ in range(M):
    infoArr = list(map(int, input().split()))
    if len(infoArr) > 2:
        for i in range(1, len(infoArr)-1):
            graph[infoArr[i]].append(infoArr[i+1])
            indegrees[infoArr[i+1]] += 1
q = deque([])
result = []
for i in range(1, len(indegrees)):
    if indegrees[i] == 0:
        q.append(i)
        result.append(i)
while q:
    current = q.popleft()
    for i in range(len(graph[current])):
        next = graph[current][i]
        indegrees[next] -= 1
        if indegrees[next] == 0:
            q.append(next)
            result.append(next)
if len(result) == N:
    for num in result:
        print(num)
else:
    print(0)