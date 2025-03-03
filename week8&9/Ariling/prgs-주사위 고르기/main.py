from bisect import bisect_left
def solution(dice):
    # A랑 B가 dice를 각각 가져가고 각각 가져간 주사위를 모두 굴린 뒤 나온 수들을 모두 합해 점수를 계산한다.
    # 승리할 확률이 가장 높도록 주사위를 가져가는 것 저 많은 경우의 수를 계산해야 하는 것..
    combi_arr = []
    def combination(combi,n, index):
        if n == len(dice) // 2:
            combi_arr.append(combi.copy())
            return
        if index == len(dice):
            return
        combi.append(index)
        combination(combi, n+1, index+1)
        combi.pop()
        combination(combi, n, index+1)
    combination([], 0, 0)
    def getSums(combo):
        sums = []
        def calSums(cnt, sum):
            if cnt == len(dice) // 2:
                sums.append(sum)
                return
            for i in range(6):
                calSums(cnt+1, sum+dice[combo[cnt]][i])
        calSums(0, 0)
        return sums
    # 승리를 담기
    max_wins = 0
    best_combination = []
    for combi_a in combi_arr:
        combi_b = [i for i in range(len(dice)) if i not in combi_a]
        sums_a = getSums(combi_a)
        sums_b = sorted(getSums(combi_b))
        # A가 이기는 경우를 구하기
        wins = 0
        for a in sums_a:
            wins += bisect_left(sums_b, a)
        if wins > max_wins:
            max_wins = wins
            best_combination = [i+1 for i in combi_a]
    return best_combination