def solution(edges):
    # 시작 정점 번호, 도넛, 막대, 8자
    answer = [0, 0, 0, 0]
    nodeInfo = {}
    for start, end in edges:
        if not start in nodeInfo:
            nodeInfo[start] = [0, 0]
        if not end in nodeInfo:
            nodeInfo[end] = [0, 0]
        nodeInfo[start][0] += 1
        nodeInfo[end][1] += 1
    for key in nodeInfo:
        [enter, out] = nodeInfo[key]
        if enter >= 2 and out == 0:
            answer[0] = int(key)
        if enter == 0 and out >= 1:
            answer[2] += 1
        if enter == 2 and out >= 2:
            answer[3] += 1
    answer[1] = nodeInfo[answer[0]][0] - answer[2] - answer[3]
    return answer