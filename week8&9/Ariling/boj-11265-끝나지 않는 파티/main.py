import sys
input = sys.stdin.readline
import heapq

N, M = map(int, input().split())
dist_info = [list(map(int, input().split())) for _ in range(N)]
user_info = [list(map(int, input().split())) for _ in range(M)]
inf = int(1e9)
graph = [[] for _ in range(N+1)]
answer_info = [[]]

for i in range(N):
    for j in range(N):
        if i == j:
            continue
        else:
            graph[i+1].append((j+1, dist_info[i][j]))
def dikstra(i):
    distances = [inf] * (N+1)
    q = []
    distances[i] = 0
    # 거리를 먼저 넣어야 하는구나..!
    heapq.heappush(q, (0, i))
    while q:
        dis, now = heapq.heappop(q)
        if distances[now] < dis:
            continue
        for to, cost in graph[now]:
            dist = dis + cost
            if dist < distances[to]:
                distances[to] = dist
                heapq.heappush(q, (dist, to))
    return distances
for i in range(1, N+1):
    answer_arr = dikstra(i)
    answer_info.append(answer_arr)
for i in range(M):
    [st, ed, time] = user_info[i]
    if answer_info[st][ed] <= time:
        print("Enjoy other party")
    else:
        print("Stay here")


# for k in range(1, N+1):
#     for i in range(1, N+1):
#         for j in range(1, N+1):
#             graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
# for i in range(M):
#     [st, ed, time] = user_info[i]
#     if graph[st][ed] <= time:
#         print("Enjoy other party")
#     else:
#         print("Stay here")


