import sys
input = sys.stdin.readline

N, M = map(int, input().split())
inf = int(1e9)
graph = [[inf] * (N+1) for _ in range(N+1)]
min_dis = inf
combi = None
for _ in range(M):
    st, ed = map(int, input().split())
    graph[st][ed] = 2
    graph[ed][st] = 2
for k in range(1, N+1):
    for i in range(1, N+1):
        for j in range(1, N+1):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
for i in range(1, N+1):
    for j in range(i+1, N+1):
        total_dist = 0
        for k in range(1, N+1):
            if i != k and j != k:
                total_dist += min(graph[i][k], graph[k][j])
        if total_dist < min_dis:
            min_dis = total_dist
            combi = (i, j)
print(combi[0], combi[1], min_dis)