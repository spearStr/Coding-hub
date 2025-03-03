def solution(diffs, times, limit):
    # n개의 퍼즐을 제한 시간 내에 풀어야 하는 퍼즐 게임
    # 난이도 diff, 소요 시간 time_cur, 이전 퍼즐 소요시간 time_prev 숙련도 level
    # diff <- level 이면 틀리지 않고 time_cur만큼 해결
    # 반대면 diff-level번 틀린다. 틀릴때마다 time_cur 만큼의 시간 사용 및 추가로 time_prev 다시 풀고 와야 한다. (이걸 diff-level번 반복)
    # 이전 퍼즐을 다시 풀 때는 이전 퍼즐의 난이도에 상관없이 틀리지 않습니다 -> 이게 핵심일 듯..?
    # limit이 정해져있으며 모두 풀기위한 숙련도 최솟값을 구하고자 한다.
    # 이거... 이분탐색으로 하는건가..?
    left, right = min(diffs), max(diffs)
    while left <= right:
        mid = (left + right) // 2
        clear_time = times[0] if diffs[0] <= mid else times[0] * (diffs[0] - mid)
        for i in range(1, len(times)):
            if clear_time > limit:
                break
            if diffs[i] <= mid:
                clear_time += times[i]
            else:
                clear_time += (times[i] + times[i-1]) * (diffs[i] - mid)
                clear_time += times[i]
        if clear_time <= limit:
            right = mid-1
        else:
            left = mid+1
    answer = left
    return answer