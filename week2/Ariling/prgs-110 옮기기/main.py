def solution(s):
    answer = []
    for x in s:
        # 모든 110 찾기
        # 110 찾으면 변형된 x에서 또 찾기
        cnt = 0
        stack = []
        for x_one in x:
            if x_one == '1':
                stack.append(x_one)
            else:
                if len(stack) >= 2 and stack[-1] == '1' and stack[-2] == '1':
                    stack.pop()
                    stack.pop()
                    cnt += 1
                else:
                    stack.append(x_one)
        x = ''.join(stack)
        # 뒤에서부터 체크해서 0이 나오면 그 0 뒤에 모든 110 붙이기
        # 0 없으면 나머지가 전부 1로 구성되어 있으므로 모든 110을 앞에 붙이기
        for i in range(len(x) - 1, -1, -1):
            if x[i] == '0':
                answer.append(x[:i + 1] + ('110' * cnt) + x[i + 1:])
                break
        else:
            answer.append('110' * cnt + x)

    return answer