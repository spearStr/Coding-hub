def solution(dirs):
    # x축 -5 ~ 5 y축 -5 ~ 5
    dir_set = set()
    x, y = 0, 0
    for dir in dirs:
        newX, newY = x, y
        if dir == "U" and y < 5:
            newY += 1
        elif dir == "D" and y > -5:
            newY -= 1
        elif dir == "L" and x > -5:
            newX -= 1
        elif dir == "R" and x < 5:
            newX += 1
        if newX == x and newY == y:
            continue
        else:
            dir_set.add((y, x, newY, newX))
            dir_set.add((newY, newX, y, x))
            x,y = newX, newY
    answer = len(dir_set) // 2
    return answer

print(solution("LULLLLLLU"))