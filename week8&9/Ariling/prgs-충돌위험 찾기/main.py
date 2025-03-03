def solution(points, routes):
    # n개의 포인트가 있고 각각 다른 번호이다.
    # m개의 포인트로 구성되고 할당된 포인트를 순서대로 방문한다.
    # x대이고 1초마다 4방향중 하나로 이동이 가능하다.
    # 항상 최단 경로로 이동하며 r을 우선으로 한다. 즉 상하를 먼저 for문으로 두기
    # 벗어나는 경로는 고려하지 않는다. 같은 좌표에 로봇이 2대 이상 있으면 충돌있다고 한다.
    point_arr = {}
    for i in range(len(points)):
        [r, c] = points[i]
        point_arr[i+1] = [r, c]
    # 짧은 길 담는 곳 , 그 정거장 하면서 하려면 일단 가는 방향을 담는게 맞음..
    route_arr= []
    max_len = -1
    # 일단 위치를 박아놓기...
    for route in routes:
        [cur_r, cur_c] = point_arr[route[0]]
        pos_arr = [(cur_r, cur_c)]
        for i in range(1, len(route)):
            r_diff = cur_r - point_arr[route[i]][0]
            c_diff = cur_c - point_arr[route[i]][1]
            while r_diff != 0:
                cur_r += 1 if r_diff < 0 else -1
                r_diff += -1 if r_diff > 0 else 1
                pos_arr.append((cur_r, cur_c))
            while c_diff != 0:
                cur_c += 1 if c_diff < 0 else -1
                c_diff += -1 if c_diff > 0 else 1
                pos_arr.append((cur_r, cur_c))
        if len(pos_arr) > max_len:
            max_len = len(pos_arr)
        route_arr.append(pos_arr)
    answer = 0
    for i in range(max_len):
        # 이 방법은 힌트를 본 건 아니고 어떻게 중복을 찾을지 물어봐서 활용하였다.
        values = [arr[i] for arr in route_arr if i < len(arr)]
        seen = set()
        duplicates = set()
        for val in values:
            if val in seen:
                duplicates.add(val)
            else:
                seen.add(val)
        answer += len(duplicates)
    return answer