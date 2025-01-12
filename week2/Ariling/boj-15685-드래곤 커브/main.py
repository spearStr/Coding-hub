import sys
input = sys.stdin.readline

N = int(input())
arr = [[0] * 101 for _ in range(101)]
zero_arr = []
first_arr = []
second_arr = []
third_arr = []

def curve_arr(g, arr):
    if g == 11:
        return arr
    new_arr = arr[:]
    for i in range(len(arr)-1, -1, -1):
        if arr[i] == 3:
            new_arr.append(0)
        else:
            new_arr.append(arr[i] + 1)
    g += 1
    return curve_arr(g, new_arr)
zero_arr = curve_arr(1, [0])
first_arr = curve_arr(1, [1])
second_arr = curve_arr(1, [2])
third_arr = curve_arr(1, [3])
for _ in range(N):
    info = list(map(int, input().split()))
    x, y = info[0], info[1]
    arr[x][y] = 1
    dir = []
    if info[2] == 0:
        dir = zero_arr[:]
    elif info[2] == 1:
        dir = first_arr[:]
    elif info[2] == 2:
        dir = second_arr[:]
    else:
        dir = third_arr[:]
    for i in range(2 ** info[3]):
        if dir[i] == 0 and x + 1 < 101:
            x += 1
            arr[x][y] = 1
        elif dir[i] == 1 and y - 1 >= 0:
            y -= 1
            arr[x][y] = 1
        elif dir[i] == 2 and x - 1 >= 0:
            x -= 1
            arr[x][y] = 1
        elif dir[i] == 3 and y + 1 < 101:
            y += 1
            arr[x][y] = 1

count = 0
for i in range(100):
    for j in range(100):
        if arr[i][j] == 1 and i+1 < 101 and j+1 < 101:
            if arr[i+1][j] == 1 and arr[i][j+1] == 1 and arr[i+1][j+1] == 1:
                count += 1
print(count)