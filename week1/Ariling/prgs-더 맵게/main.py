import heapq
def solution(scoville, K):
    answer = 0
    heap = []
    for i in range(len(scoville)):
        heapq.heappush(heap, scoville[i])
    while heap[0] < K:
        if len(heap) == 1:
            break
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        c = a + (b*2)
        heapq.heappush(heap, c)
        answer += 1
    # K이상으로 만들 수 없는 경우 조건문처리
    if heap[0] >= K:
        return answer
    else:
        return -1