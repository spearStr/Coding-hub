import heapq
def solution(players, m, k):
    # 같은 시간대에 게임 이용하는 사람이 m명 늘어날 때 마다 서버 1대가 추가 필요
    # m명 미만이라면 서버 증설 필요 X 한 번 증설한 서버는 k시간 동안 있다가 사라짐
    # 최소 몇번을 증설해야 하는지
    answer = 0
    q = []
    plus_server = 0
    for i in range(len(players)):
        player = players[i]
        if q and q[0][0] == i:
            time, server = heapq.heappop(q)
            plus_server -= server
        if player >= m:
            needs = player // m
            if needs > plus_server:
                answer += needs - plus_server
                heapq.heappush(q, (i+k, needs - plus_server))
                plus_server += needs - plus_server
    return answer