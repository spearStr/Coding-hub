import sys
import heapq
input = sys.stdin.readline

n, m = map(int, input().split())
university = [0] + input().split()
visit = [False] * (n + 1)
graph = [[] for _ in range(n + 1)]

for _ in range(m):
    start, end, dist = map(int, input().split())
    graph[start].append([end, dist])
    graph[end].append([start, dist])


def prim():
    heap = []
    ans = 0
    cnt = 0
    heapq.heappush(heap, (0, 1, "?"))
    while heap:
        x, y, prior_type = heapq.heappop(heap)
        if visit[y]:
            continue

        if prior_type == university[y]:
            continue

        now_type = university[y]
        visit[y] = True
        ans += x
        cnt += 1
        if cnt == n:
            return ans

        for node, value in graph[y]:
            if not visit[node]:
                if university[node] != now_type:
                    heapq.heappush(heap, (value, node, university[y]))
    return -1


print(prim())