def solution(s):
    answer = [0, 0]
    while s != "1":
        for i in range(len(s)):
            if s[i] == "0":
                answer[1] += 1
        s = s.replace("0",'')
        value_len = len(s)
        # 이진수로 변환한 뒤 다시 문자열로 변환
        s = str(format(value_len, 'b'))
        answer[0] += 1
    return answer