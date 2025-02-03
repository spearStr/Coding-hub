import sys
input = sys.stdin.readline
# pypy로 해야 통과... 왜인지는 모름..
arr = [list(map(int, input().rstrip())) for _ in range(9)]
def checkR(r, n) :
    for i in range(9):
        if arr[r][i] == n:
            return False
    return True
def checkC(c, n) :
    for i in range(9):
        if arr[i][c] == n:
            return False
    return True
def checkSquare(r, c, n):
    for i in range(3):
        for j in range(3):
            if arr[(r // 3) * 3 + i][(c // 3) * 3 + j] == n:
                return False
    return True
def find(n) :
    if n == len(blank):
        for i in arr:  # 출력 후
            print(''.join(map(str, i)))
        exit()  # 강제 종료
    r = blank[n][0]
    c = blank[n][1]
    for i in range(1, 10):
        if checkR(r, i) and checkC(c, i) and checkSquare(r, c, i):
            arr[r][c] = i
            find(n+1)
            arr[r][c] = 0
blank = []
for i in range(9):
    for j in range(9):
        if arr[i][j] == 0:
            blank.append((i, j))
find(0)
