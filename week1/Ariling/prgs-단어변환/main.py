def solution(begin, target, words):
    answer = int(1e9)
    checked_arr = [False] * len(words)
    # 알파벳 바꾸기 가능 여부 함수
    def diff_check(current, compare):
        diff = 0
        for i in range(len(current)):
            if current[i] != compare[i]:
                diff += 1
        if diff > 1:
            return False
        return True
    # DFS활용(재귀방식)
    def convert_word(c, t, check, try_num):
        nonlocal answer
        if t not in words:
            answer = 0
            return
        if try_num > answer:
            return
        if c == t and try_num < answer:
            answer = try_num
            return
        for i in range(len(words)):
            if not check[i] and diff_check(c, words[i]):
                check[i] = True
                convert_word(words[i], t, check, try_num + 1)
                check[i] = False
    convert_word(begin, target, checked_arr, 0)
    return answer