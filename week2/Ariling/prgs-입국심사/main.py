def solution(n, times):
    times = sorted(times)
    left, right = 1, times[len(times) - 1] * n
    answer = right
    while left <= right:
        mid = (left + right) // 2
        pass_num = 0
        # 처음에 나누면 30이야.. 그러면 4명, 3명 통과되니깐 7명..
        # 그러면 큰거니깐 줄여야 해 right에 mid-1을 넣고
        # 작으면 오히려 크게 해야하니깐 left에 mid+1을 넣고
        for time in times:
            pass_num += mid // time
        if pass_num >= n:
            right = mid - 1
            answer = min(answer, mid)
        else:
            left = mid + 1
    return answer
