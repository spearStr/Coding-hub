# 1차 실패
def solution(a):
    answer = 0
    # 근데 이 방식은 무조건 시초날 것 같은데..?
    for i in range(len(a)):
        # 크든 작든 상관이 없으니깐
        if i == 0 or i == len(a) - 1:
            answer += 1
            continue
        prev_min = min(a[:i])
        next_min = min(a[i+1:])
        arr = [prev_min, a[i], next_min]
        arr = sorted(arr)
        if a[i] == arr[2]:
            continue
        else:
            answer += 1
    return answer
    
# 2차, 3차 실패
from collections import deque
def solution(a):
    answer = 0
    prev_arr = deque([])
    prev_min = int(1e9)
    next_arr = deque([])
    next_min = int(1e9)
    for i in range(0, len(a)):
        prev_min = min(prev_min, a[i])
        prev_arr.append(prev_min)
    for i in range(len(a)-1, -1, -1):
        next_min = min(next_min, a[i])
        next_arr.appendleft(next_min)
    for i in range(len(a)):
        if prev_arr[i] < a[i] and next_arr[i] < a[i]:
            continue
        else:
            answer += 1
    return answer
    
    
# 최종
def solution(a):
    answer = 0
    # prev, next 미리 만들어놓기
    prev_arr = []
    prev_min = int(1e9)
    next_arr = []
    next_min = int(1e9)
    # min함수를 쓰는 대신 값을 그때그때 업뎃을 하여 O(N)으로 만들기
    for i in range(0, len(a)):
        prev_min = min(prev_min, a[i])
        prev_arr.append(prev_min)
    for i in range(len(a)-1, -1, -1):
        next_min = min(next_min, a[i])
        next_arr.append(next_min)
    # 반대의 경우이므로 뒤집기
    next_arr.reverse()
    # 둘 다 큰 경우 최후까지 남을 수 없으므로 그 이외만 +=1처리를 한다.
    for i in range(len(a)):
        if prev_arr[i] < a[i] and next_arr[i] < a[i]:
            continue
        else:
            answer += 1
    return answer