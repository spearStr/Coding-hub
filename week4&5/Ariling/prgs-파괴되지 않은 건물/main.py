def solution(board, skill):
    # 한꺼번에 계산해야 한다. 이거 for문하면 망한다를 직감적으로 느낌
    answer = 0
    arr = [[0] * (len(board[0])+1) for _ in range(len(board)+1)]
    for type, r1, c1, r2, c2, degree in skill:
        # 2차원 누적합은 이렇게 하는 것! 그리고 삼항연산자도 파이썬은 이렇게 한다.
        damage = -degree if type == 1 else degree
        arr[r1][c1] += damage
        arr[r1][c2+1] -= damage
        arr[r2+1][c1] -= damage
        arr[r2+1][c2+1] += damage
    for i in range(len(arr)):
        for j in range(1, len(arr[0])):
            arr[i][j] += arr[i][j-1]
    for i in range(len(arr[0])):
        for j in range(1, len(arr)):
            arr[j][i] += arr[j-1][i]
    for i in range(len(board)):
        for j in range(len(board[0])):
            board[i][j] += arr[i][j]
            answer = answer+1 if board[i][j] > 0 else answer
    return answer